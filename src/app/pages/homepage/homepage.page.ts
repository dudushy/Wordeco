/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

import { DbService } from '../../services/db/db.service';

import { AppComponent } from '../../app.component';

import { Platform, AlertController } from '@ionic/angular';

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
    public app: AppComponent,
    public platform: Platform,
    public alertController: AlertController
  ) {
    console.log(`[${this.TITLE}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.TITLE}#ngOnInit]`);
  }

  ionViewDidEnter(): void {
    console.log(`[${this.TITLE}#ionViewDidEnter]`);

    this.platform.ready().then((readySource) => {
      console.log(`[${this.TITLE}#ionViewDidEnter] readySource`, readySource);
    });
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