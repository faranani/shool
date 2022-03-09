import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherDdetailsPageRoutingModule } from './teacher-ddetails-routing.module';

import { TeacherDdetailsPage } from './teacher-ddetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherDdetailsPageRoutingModule
  ],
  declarations: [TeacherDdetailsPage]
})
export class TeacherDdetailsPageModule {}
