import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';

import { IonicModule } from "@ionic/angular";
import { LoginComponent } from './login/login.component';
import { PropertyFeedComponent } from './property-feed/property-feed.component';

@NgModule({

  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [ProfileComponent, LoginComponent, PropertyFeedComponent],
  exports: [ProfileComponent, LoginComponent, PropertyFeedComponent]
})
export class SharedModule { }
