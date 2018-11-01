import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialGuard } from './guards/tutorial.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [TutorialGuard]
  },
  {
    path: 'tutorial',
    loadChildren: './tutorial/tutorial.module#TutorialPageModule'
  },

  { path: 'profile-edit',
    loadChildren: './profile-edit/profile-edit.module#ProfileEditPageModule' },

  { path: 'Property', 
  loadChildren: './Property/Property.module#PropertyPageModule',
  canActivate: [AuthGuard] }


]
@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
