/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

import { DbService } from '../../services/db/db.service';

import { AppComponent } from '../../app.component';

import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  TITLE = 'ConfigPage';

  rows: number = this.db.get('rows') || 6;
  columns: number = this.db.get('columns') || 5;

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

  async eraseData(topic: string, msg: string): Promise<any> {
    const alert = await this.alertController.create({
      cssClass: 'alerts',
      header: topic,
      message: msg,
      buttons: [
        {
          cssClass: 'alerts-cancel',
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log(`[${this.TITLE}#eraseData] CANCEL`);
          }
        },
        {
          cssClass: 'alerts-accept',
          text: 'Accept',
          handler: () => {
            console.log(`[${this.TITLE}#eraseData] ACCEPT`);

            this.db.erase();
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log(`[${this.TITLE}#eraseData] role`, role);

    this.updateView(this.TITLE);
  }

  updateRows(value: any): void {
    console.log(`[${this.TITLE}#updateRows] rows`, value);

    this.db.set('rows', value);
  }

  updateColumns(value: any): void {
    console.log(`[${this.TITLE}#updateColumns] columns`, value);

    this.db.set('columns', value);
  }
}