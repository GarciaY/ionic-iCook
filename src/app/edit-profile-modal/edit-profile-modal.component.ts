import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss'],
})
export class EditProfileModalComponent {

  @Input() label: string;
  @Input() NumVal: number;
  @Input() TextVal: string;
  NumValInput = new FormControl ('', Validators.required)
  TextValInput = new FormControl ('',Validators.required)
  constructor(private modalCtrl: ModalController) { }

  dismissModal(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

 onEdit(){
  const newTextVal = this.TextVal + this.TextValInput.value;
  const newNumVal = this.NumVal + this.NumValInput.value;
  this.modalCtrl.dismiss(newNumVal, 'Changes Saved')
  this.modalCtrl.dismiss(newTextVal, 'Changes Saved')
  console.log(newNumVal);
  console.log(newTextVal);
 }
  

}
