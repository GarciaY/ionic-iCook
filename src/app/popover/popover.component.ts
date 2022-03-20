import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(public popoverCtrl: PopoverController, private alertCtrl: AlertController) { }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'basic-alert',
      // header: 'Edit Avatar',
      // subHeader: 'Alert Subtitle',
      message: 'Are you sure you want to delete this comment?',
      buttons: ['Yes', 'No'] 
    });

    await alert.present();
  }


  ngOnInit() {}

    
 close(){
  this.popoverCtrl.dismiss();
}

}
