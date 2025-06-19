import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { SubscriptionsManager } from '../../../../core/helpers/SubscriptionsManager';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NzDrawerSize } from 'ng-zorro-antd/drawer';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { RoutingService } from '../../../../core/services/routing.service';
import { AccountOpeningService } from '../../services/account-opening.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-insurance-application',
  templateUrl: './insurance-application.component.html',
  styleUrl: './insurance-application.component.scss'
})
export class InsuranceApplicationComponent implements OnInit, OnDestroy {

  constructor(
      private routingService: RoutingService,
      private accountOpeningService: AccountOpeningService,
      private notification: NzNotificationService,
      private cdr: ChangeDetectorRef,
      private breakpointObserver: BreakpointObserver
    ) { 
      this.breakpointObserver.observe([
        Breakpoints.XSmall, // Phones
        Breakpoints.Small,  // Small tablets
      ]).subscribe((result) => {
        if (result.matches) {
          this.drawerSize = 'default'; // Smaller drawer on small screens
        } else {
          this.drawerSize = 'large'; // Large drawer for bigger screens
        }
      });
    }

  ngOnInit(): void {
    this.subs.add = this.accountOpeningService.queryRegistrarResponse$.subscribe((res: any) => {
      this.onQueryRegistrarResponse(res);
    });

    this.subs.add = this.accountOpeningService.createNewRecordResponse$.subscribe((res: any) => {
      this.onCreateNewRecordResponse(res);
    });
  }

  onCreateNewRecordResponse(res: any) {
    console.log(res);
    if (res.data.id) {
      this.notification.create('success', 'Success', 'Request submitted successfully');
      this.savedTicketNumber = res.data.ticketId;
      this.isDoneVisible = true;
    } else {
      this.notification.create('error', 'Error', 'Request failed');
    }
    this.insureProductLoader = false;
  }

  savedTicketNumber?: any;

  onQueryRegistrarResponse(res: any) {
    console.log(res);
  
    if (res.success) {
      if (res.data.Status == "A") {
        // Assuming dateOfBirth is a string in the format 'YYYY-MM-DD' (adjust if necessary)
        const dateOfBirth = this.parseDate(res.data.DateOfBirth);  // Convert to Date object
        // const dateOfBirth = this.parseDate("23/05/2010");  // Convert to Date object
        console.log('Date of birth:', res.data.DateOfBirth);
        console.log('Date of birth:', dateOfBirth);

        console.log(res.data)
        if(res.data.Sex == 'M') {
          console.log("MALE")
          this.title = [...this.title, "MR"];
        }
        if(res.data.Sex == 'F') {
          console.log("FEMALE")
          this.title = [...this.title, "MRS", "MISS", "MS"];
        }

        
  
        if (!dateOfBirth) {
          this.notification.create('error', 'Error', 'Invalid date of birth');
          return;
        }
  
        // Calculate age
        const age = this.calculateAge(dateOfBirth);
        console.log('Age:', age);
  
        // If age is less than 18, prevent them from proceeding
        if (age < 18) {
          this.queryRegistrarLoader = false;
          this.isAgeVisible = true;
          return;  // Stop further execution
        }
  
        // Proceed with registration if age is 18 or older
        this.registrarResponse = res.data;
        this.applicationState.registrarData = true;
        this.processRegistrarData();
      } else {
        this.notification.create('error', 'Error', 'Information is invalid');
      }
    } else {
      this.notification.create('error', 'Error', 'Incorrect ID Number supplied');
    }
    this.queryRegistrarLoader = false;
  }

  subs = new SubscriptionsManager();

  // Terms and Conditions
  isTCAcknowledged = false;
  startInsuranceApplicationProcess: boolean = false;
  isAcknowledged = true;

  beginInsuranceApplicationProcess() {
    this.startInsuranceApplicationProcess = true;
    this.isVisible = false;
  }

  isVisible = true;

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.navigateTo('home');
  }

  tcVisible = false;
  drawerSize: NzDrawerSize = 'large'; // Default size

  open(): void {
    this.tcVisible = true;
  }

  close(): void {
    this.tcVisible = false;
  }

  // Insurance Application

  insuranceApplicationForm = {
    personalInformation: {
      idNumber: '',
      title: '',
      firstName: '',
      lastName: '',
      gender: '',
      dateOfBirth: '',
      mobileNumber: '',
      emailAddress: '', // optional
      address: '',
    },
    productInformation: {
      productImages: [] as string[],
      insuranceProduct: '',
      sumInsured: '',
    },
    quotation: {
      policyDetails: '',
      premiumAmount: '',
      paymentOption: '',
    }
  };

  applicationState = {
    sectionStates: {
      identification: false,
      personalDetails: false,
      contactDetails: false,
      address: false,
    },
    registrarData: false,
  };

  current = 0;


  pre(): void {
    this.current -= 1;
  }

  next(): void {
    if(this.current == 0) {
      const isValid = this.validateMobileNumber(this.insuranceApplicationForm.personalInformation.mobileNumber);
      if (!isValid) {
        this.notification.create('error', 'Error', 'The mobile number you entered is invalid')
        return; // Stop execution if mobile number is invalid
      }
    }
    if(this.current == 3) {
        this.uploadAttachments();
    }
    this.current += 1;
  }

  insureProductLoader: boolean = false;

  done(): void {
    this.insureProductLoader = true;
    console.log(this.insuranceApplicationForm);
    this.accountOpeningService.createNewRecord(this.insuranceApplicationForm, 'insure');
  }

  isDoneVisible = false;

  // Registrar Data
  registrarResponse?: any;
  disableRegistrarInputs: boolean = false;
  queryRegistrarLoader: boolean = false;

  getRegistrarData() {
    this.insuranceApplicationForm.personalInformation.idNumber = this.removeSpecialCharacters(this.insuranceApplicationForm.personalInformation.idNumber)
    this.queryRegistrarLoader = true;
    this.accountOpeningService.queryRegistrar(this.removeSpecialCharacters(this.insuranceApplicationForm.personalInformation.idNumber));
  }

  processRegistrarData() {
    this.insuranceApplicationForm.personalInformation.firstName = this.registrarResponse.FirstName;
    this.insuranceApplicationForm.personalInformation.lastName = this.registrarResponse.Surname;
    this.insuranceApplicationForm.personalInformation.gender = this.processGender(this.registrarResponse.Sex)

    const dateString = this.registrarResponse.DateOfBirth; // e.g., "23/05/1973"
    const [day, month, year] = dateString.split("/").map(Number);
    this.dateOfBirthDisplay = new Date(year, month - 1, day);

    this.insuranceApplicationForm.personalInformation.dateOfBirth = this.registrarResponse.DateOfBirth;
    this.disableRegistrarInputs = true;
  }

  restartEntries() {
    Object.keys(this.insuranceApplicationForm.personalInformation).forEach(
      key => this.insuranceApplicationForm.personalInformation[key as keyof typeof this.insuranceApplicationForm.personalInformation] = ''
    );
    this.applicationState.registrarData = false;
  }

  dateOfBirthDisplay?: any;

  checkInformation(
    jsonSection: keyof typeof this.insuranceApplicationForm,
    excludedPages: any,
  ): boolean {
    const section = this.insuranceApplicationForm[jsonSection];

    let result = !Object.entries(section)
  .filter(([key]) => !excludedPages.includes(key)) // Exclude specific keys
  .map(([, value]) => value)
  .some(value => value === '' || value === null); // Check for empty string or null

    return result;
  }

  checkDocuments(): boolean {
    const fileLists = [
      this.productFileList,
    ];
  
    return fileLists.every(list => list.length > 0);
  }

    productFileList: any[] = [];
  
    checkProductUploadFile = (file: NzUploadFile): boolean => {
      this.productFileList = this.productFileList.concat(file);
      return false;
    }

  // Leave Application
  isLeaveVisible = false;

  openLeavePageModal() {
    this.isLeaveVisible = true;
  }


  handleLeaveCancel(): void {
    this.isLeaveVisible = false;
    this.navigateTo('home');
  }

  isAgeVisible = false;


  handleAgeCancel(): void {
    this.isAgeVisible = false;
    this.navigateTo('home');
  }

  // Uploads
  async uploadAttachments() {
    console.log(this.productFileList);
  
    try {
      const productDocs = await this.processUpload(this.productFileList);
      this.insuranceApplicationForm.productInformation.productImages = productDocs.map((item) => item.id); // Keep as an array
  
      console.log("-------------------");
      console.log(this.insuranceApplicationForm.productInformation);
    } catch (error) {
      console.error("Error uploading attachments:", error);
    }
  }

  processUpload(fileList: any): Promise<any[]> {
    const uploadPromises: Promise<any>[] = [];
  
    fileList.forEach((file: any) => {
      const formData: FormData = new FormData();
      formData.append("files", file);
      formData.append("service", "ACCOUNT-OPEN");
      formData.append("temporary", "false");
  
      const uploadPromise = new Promise<any>((resolve, reject) => {
        this.accountOpeningService.uploadFile(formData).subscribe({
          next: (response) => {
            console.log(`Upload successful`, response);
  
            // Ensure response.data is properly extracted
            if (response && response.data) {
              resolve(response.data); // Resolve with data
            } else {
              console.error("Unexpected upload response format:", response);
              resolve([]); // Resolve with an empty array if response is not as expected
            }
          },
          error: (error) => {
            console.error(`Error uploading files`, error);
            reject(error);
          },
        });
      });
  
      uploadPromises.push(uploadPromise);
    });
  
    return Promise.all(uploadPromises).then((results) => {
      return results.flat(); // Flatten in case each upload returns multiple items
    });
  }
  


  completeUploadPromises(uploadPromises: any) {
    // Wait for all uploads to complete
    Promise.all(uploadPromises)
      .then(() => {
        console.log('All uploads complete.');

        // Proceed with the rest of the logic
        console.log("Upload job completed")
      })
      .catch((error) => {
        console.error('Error in one or more uploads:', error);
      });
  }


  // Miscellaneous Functions
  navigateTo(page: string) {
    this.routingService.navigateByUrl('self-service/' + page);
  }

  removeSpecialCharacters(str: any) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
  }

  validateMobileNumber(mobile: string): boolean {
    const mobileNumberRegex = /^(2637\d{8}|07\d{8})$/;
    return mobileNumberRegex.test(mobile);
  }

  normalizePhoneNumber(phone: string): string {
    return phone.replace(/^(\+?263|0)/, ''); // Remove +263, 263, or leading 0
  }

  generatePDF() {
    var data = document.getElementById('terms-and-conditions')!;
    html2canvas(data).then((canvas) => {
      var docName = 'AFC Commercial Bank Account Opening Terms and Conditions ' + new Date();
      var contentWidth = canvas.width;
      var contentHeight = canvas.height;
      //One page pdf shows the height of canvas generated by html page;
      var pageHeight = (contentWidth / 592.28) * 841.89;
      //html page height without pdf generation
      var leftHeight = contentHeight;
      //Page offset
      var position = 0;
      //a4 paper size [595.28841.89], width and height of image in pdf of canvas generated by html page
      var imgWidth = 595.28;
      var imgHeight = (592.28 / contentWidth) * contentHeight;

      //Return picture dataURL, parameters: picture format and sharpness (0-1)
      var pageData = canvas.toDataURL('image/jpeg', 1.0);

      let pdf = new jsPDF('p', 'pt', 'a4');

      //There are two heights to distinguish, one is the actual height of the html page, and the height of the generated pdf page (841.89)
      //When the content does not exceed the display range of one page of pdf, paging is not required
      if (leftHeight < pageHeight) {
        pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
      } else {
        while (leftHeight > 0) {
          pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
          leftHeight -= pageHeight;
          position -= 841.89;
          //Avoid adding blank pages
          if (leftHeight > 0) {
            pdf.addPage();
          }
        }
      }
      pdf.save(docName + '.pdf');
    });
  }

  // Helper function to parse the date string (DD/MM/YYYY) into a Date object
  parseDate(dateString: string): Date | null {
    // Split the date string by '/' to get day, month, and year
    const parts = dateString.split('/');

    // Ensure the date has the correct format (DD/MM/YYYY)
    if (parts.length !== 3) {
      return null;  // Invalid format
    }

    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are zero-indexed in JavaScript (0 = January, 11 = December)
    const year = parseInt(parts[2], 10);

    // Return a new Date object, or null if the parsed date is invalid
    const parsedDate = new Date(year, month, day);

    // Check if the date is valid
    if (isNaN(parsedDate.getTime())) {
      return null;  // Invalid date
    }

    return parsedDate;
  }

  processGender(str: any) {
    if (str == 'M') {
      return 'Male'
    } else {
      return 'Female'
    }
  }

  // Helper function to calculate age
  calculateAge(dateOfBirth: Date): number {
    const today = new Date();
    let age = today.getFullYear() - dateOfBirth.getFullYear();
    const monthDifference = today.getMonth() - dateOfBirth.getMonth();
    
    // If birthday hasn't occurred yet this year, subtract 1 from age
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dateOfBirth.getDate())) {
      age--;
    }
    
    return age;
  }

  // Data
  title = [
    "DR",
    "REV"
  ]

  gender = [
    'Male',
    'Female'
  ]

  ngOnDestroy(): void {
    this.subs.dispose();
  }
}
