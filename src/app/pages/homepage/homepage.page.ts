/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

import { DbService } from '../../services/db/db.service';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  TITLE = 'HomepagePage';
  version = '0.0.1';

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