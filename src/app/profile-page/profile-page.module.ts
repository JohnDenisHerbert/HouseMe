import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfilePagePage } from './profile-page.page';
import { ProfileFormComponent } from '../profile-page/profile-form/profile-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePagePage, ProfileFormComponent]
})
export class ProfilePagePageModule {}
