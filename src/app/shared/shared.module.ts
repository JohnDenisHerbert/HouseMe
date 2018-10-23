import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';

import { IonicModule } from "@ionic/angular";
import { LoginComponent } from './login/login.component';
import { PropertyComponent } from './property/property.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [ProfileComponent, LoginComponent, PropertyComponent],
  exports: [ProfileComponent, LoginComponent, PropertyComponent]
})
export class SharedModule { }
