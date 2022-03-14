import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EditProfileModalComponent } from 'src/app/edit-profile-modal/edit-profile-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
 


  public values : any[]= [
    {
      label: 'Name',
      TextVal: 'Yuri Garcia',
      icon: 'person'
    },
    {
      label: 'Phone Number',
      NumVal: 999999999,
      icon: 'call'
      //TextVal
    },
    {
      label: 'Email',
      TextVal: 'yuri@email_sample.com',
      icon: 'mail'
     
    },
    {
      label: 'Age',
      NumVal: 21,
      icon: 'calendar'
 
    },
    {
      label: 'Bio',
      TextVal: 'Gretest Chef',
      icon: 'person-circle'
     
    },
    {
      label: 'Profile Description',
      TextVal: 'Like to Cook for my family and specially for my girlfriend - Experienced Cook.',
      icon: 'document-text'
     
    },
    {
      label: 'Password',
      TextVal: '**********',
      icon: 'eye'
    
    }
  ]



  constructor(public router: Router,private modalCtrl: ModalController) { }

  async openModal(values){
    const modal = await this.modalCtrl.create({
      component: EditProfileModalComponent,
      componentProps: {label: values.label, NumVal: values.NumVal, TextVal: values.TextVal}
    });

    await modal.present();

    const data = await modal.onWillDismiss();
  }

  ngOnInit() {

  
  }

}
