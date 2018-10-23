

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Observable, of } from 'rxjs';
import {switchMap, take, map} from 'rxjs/operators';
import { DbService } from './db.service';
import { Router } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { LoadingController, Platform } from '@ionic/angular';
import { auth } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;


  constructor(

    private afAuth: AngularFireAuth,
    private db: DbService,
    private router: Router,
    private gplus: GooglePlus,
    private platform: Platform,
    private loadingController: LoadingController,
    private storage: Storage
)
   {
     this.user$ = this.afAuth.authState.pipe(
       switchMap( user => (user ? db.doc$('users/${user.uid}') : of(null)))
     );
     this.handleRedirect();
     

   }

   private updateUserData({ uid, email, displayName, photoURL, isLandlord}){
     const path = 'users/${uid}';
     const data = {
       uid,
       email,
       displayName,
       photoURL,
       isLandlord
     };

     return this.db.updateAt(path, data);

   }

   async signOut() {
     await this.afAuth.auth.signOut();
     return this.router.navigate(['/']);

   }

   //Google Auth
   setRedirect(val) {
     this.storage.set('authRedirect', val);

   }

   async googleLogin() {
     try {
       let user;

       if (this.platform.is('cordova')) {
         user = await this.nativeGoogleLogin();

       }
       else{
         await this.setRedirect(true);
         const provider = new auth.GoogleAuthProvider();
         user = await this.afAuth.auth.signInWithRedirect(provider);

       }
       return await this.updateUserData(user);

     } 
     catch (err) {
       console.log(err)

       
     }

   }

   //Handle Login with redirect for web Google Auth
   private async handleRedirect() {
     if ((await this.isRedirect()) !== true) {
       return null;
     }
     const loading = await this.loadingController.create();
     await loading.present();

     const result = await this.afAuth.auth.getRedirectResult();

     if (result.user){ 
       await this.updateUserData(result.user);

     } 
     await Loading.dismiss();
     await this.setRedirect(false);
     return result;
      }
     


}
