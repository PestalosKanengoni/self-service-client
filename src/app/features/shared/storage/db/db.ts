import Dexie, { Table } from 'dexie';

export interface Category {
  id: number;  // Use `id` as the primary key
  name: string;
  subCategories: SubCategory[];  // Make this an array of `SubCategory`
}

export interface SubCategory {
  id: number;
  name: string;
  description?: string;
  templates: any[];
}

export class AppDB extends Dexie {
  categories!: Table<Category, number>;

  constructor() {
    super('authorise-db');
    this.version(3).stores({
      categories: 'id',  // Use `id` as the primary key
    });
    this.on('populate', () => this.populate());
  }

  async populate() {

  }

  async clearAllDatabases() {
    await this.categories.clear();
  }


  async getCategoryById(id: number): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async deleteCategoryById(id: number): Promise<void> {
    await this.categories.delete(id);
  }

}

export const db = new AppDB();
