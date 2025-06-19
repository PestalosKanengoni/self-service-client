import {Subscription} from "rxjs";

export class SubscriptionsManager{
  private subs = [];

  set add(s:Subscription){
    // @ts-ignore
    this.subs.push(s);
  }

  dispose() {
    // @ts-ignore
    this.subs.forEach(s => s.unsubscribe());
  }

}
