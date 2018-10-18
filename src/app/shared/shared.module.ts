import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil/profil.component';

import { IonicModule } from "@ionic/angular";
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [ProfilComponent, LoginComponent],
  exports: [ProfilComponent, LoginComponent]
})
export class SharedModule { }
