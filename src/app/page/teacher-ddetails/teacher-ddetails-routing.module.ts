import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherDdetailsPage } from './teacher-ddetails.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherDdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherDdetailsPageRoutingModule {}
