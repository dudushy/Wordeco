/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  TITLE = 'DbService';

  constructor() {
    console.log(`[${this.TITLE}#constructor]`);

    this.setupDb();
  }

  setupDb(): void {
    console.log(`[${this.TITLE}#setupDb]`);

    const theme = this.get('theme');
    console.log(`[${this.TITLE}#setupDb] theme`, theme);
    if (!theme) { this.set('theme', 'dark'); }

    this.set('base_url', 'homepage');

    const rows = this.get('rows');
    console.log(`[${this.TITLE}#setupDb] rows`, rows);
    if (!rows) { this.set('rows', '6'); }

    const columns = this.get('columns');
    console.log(`[${this.TITLE}#setupDb] columns`, columns);
    if (!columns) { this.set('columns', '5'); }
  }

  get(item: any): any {
    return JSON.parse(localStorage.getItem(item) || 'null');
  }

  set(item: any, value: any): void {
    localStorage.setItem(item, JSON.stringify(value));
  }

  erase(): void {
    localStorage.clear();
  }
}
