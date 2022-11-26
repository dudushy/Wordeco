/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ChangeDetectorRef } from '@angular/core';

import { DbService } from './services/db/db.service';

import { Router } from '@angular/router';

import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  TITLE = 'AppComponent';
  all_pages: any = [];
  theme: any = 'dark';

  constructor(
    public db: DbService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    public platform: Platform,
    public alertController: AlertController
  ) {
    console.log(`[${this.TITLE}#constructor]`);

    const lastPage = this.db.get('last_page');
    console.log(`[${this.TITLE}#constructor] lastPage`, lastPage);

    if (lastPage == null) {
      this.redirectTo(this.db.get('base_url'), this.TITLE);
    } else {
      this.redirectTo(lastPage, this.TITLE);
    }

    this.router.config.forEach((route) => {
      if (route.path != '**') {
        this.all_pages.push(route.path);
      }
    });
    console.log(`[${this.TITLE}#constructor] all_pages`, this.all_pages);

    this.loadTheme();
  }

  ionViewDidEnter(): void {
    console.log(`[${this.TITLE}#ionViewDidEnter]`);

    this.platform.ready().then((readySource) => {
      console.log(`[${this.TITLE}#ionViewDidEnter] readySource`, readySource);
    });
  }

  toggleTheme(): void {
    // console.log(`[${this.title}#toggleTheme]`);
    console.log(`[${this.TITLE}#toggleTheme] theme`, this.theme);

    if (this.theme == 'light') {
      //? dark theme
      this.theme = 'dark';
      this.db.set('theme', 'dark');
      document.body.setAttribute('theme', this.db.get('theme'));
    } else {
      //? light theme
      this.theme = 'light';
      this.db.set('theme', 'light');
      document.body.setAttribute('theme', this.db.get('theme'));
    }

    this.updateView(this.TITLE);
  }

  loadTheme(): void {
    // console.log(`[${this.title}#loadTheme]`);

    this.theme = this.db.get('theme') || 'dark';
    console.log(`[${this.TITLE}#loadTheme] theme`, this.theme);

    document.body.setAttribute('theme', this.theme);

    this.updateView(this.TITLE);
  }

  updateView(from: string): void {
    console.log(`[${this.TITLE}#updateView] from`, from);

    this.cdr.detectChanges;
  }

  redirectTo(url: any, from: any): void {
    console.log(`[${this.TITLE}#redirectTo] ${from} | url`, url);

    this.router.navigateByUrl(`/${url}`);

    this.db.set('current_url', url);
    console.log(`[${this.TITLE}#redirectTo] current_url`, this.db.get('current_url'));

    this.db.set('last_page', url);
    console.log(`[${this.TITLE}#redirectTo] last_page`, this.db.get('last_page'));

    this.updateView(this.TITLE);
  }

  defaultSort(): number { return 0; }

  async showAlert(topic: string, msg: string): Promise<any> {
    console.log(`[${this.TITLE}#showAlert] topic`, topic);
    console.log(`[${this.TITLE}#showAlert] msg`, msg);

    const alert = await this.alertController.create({
      cssClass: 'alerts',
      header: topic,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log(`[${this.TITLE}#showAlert] role`, role);
    return role;
  }
}