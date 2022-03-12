import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewOtherProfilePageRoutingModule } from './view-other-profile-routing.module';

import { ViewOtherProfilePage } from './view-other-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewOtherProfilePageRoutingModule
  ],
  declarations: [ViewOtherProfilePage]
})
export class ViewOtherProfilePageModule {}
