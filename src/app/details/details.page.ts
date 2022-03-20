import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {  Component,  Inject, OnInit,  } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  isRated = false;

  chageRating() {
    this.isRated = !this.isRated;
  }

  
  
  public badgeColour: string = 'red-orange';

  constructor(private http: HttpClient,
    @Inject(DOCUMENT) private document: Document, public popoverCtrl: PopoverController) { }

    
    async presentPopover(event){
      const popover = await this.popoverCtrl.create({
        component: PopoverComponent,
        event
      });
      return await popover.present();
    }



    currentRate: number = 0;

  ngOnInit() {
    
    }

  
}
