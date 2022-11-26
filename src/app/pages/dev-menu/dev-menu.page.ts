/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

import { DbService } from '../../services/db/db.service';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-dev-menu',
  templateUrl: './dev-menu.page.html',
  styleUrls: ['./dev-menu.page.scss'],
})
export class DevMenuPage implements OnInit {
  TITLE = 'DevMenuPage';

  filteredPages = [];

  constructor(
    public db: DbService,
    private cdr: ChangeDetectorRef,
    public app: AppComponent
  ) {
    console.log(`[${this.TITLE}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.TITLE}#ngOnInit]`);
  }

  ionViewDidEnter(): void {
    console.log(`[${this.TITLE}#ionViewDidEnter]`);

    this.filteredPages = this.app.all_pages.filter((page) => page != 'dev-menu');
  }

  updateView(from: string): void {
    console.log(`[${this.TITLE}#updateView] from`, from);

    this.cdr.detectChanges;
    this.app.updateView(this.TITLE);
  }

  redirectTo(url: any): void {
    console.log(`[${this.TITLE}#redirectTo] url`, url);

    this.app.redirectTo(url, this.TITLE);
  }

  defaultSort(): number { return 0; }
}
