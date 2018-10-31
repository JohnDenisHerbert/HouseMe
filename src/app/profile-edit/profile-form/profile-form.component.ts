import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  constructor(
    
    private db: DbService,
    private auth: AuthService,
    public modal: ModalController,
    private fb: FormBuilder // private params: NavParams
  ) { }

  ProfileForm: FormGroup;

  user;

  ngOnInit() {
    const data = {
    Age: '',
    Occupation: '',
    Gender: '',
    displayName: '',
    AboutMe: '',
    isLandlord: '',

   
    ...this.user
  };

  this.ProfileForm = this.fb.group({
    AboutMe: [
      data.AboutMe,
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250)
      ]
    ],
    Occupation: [
      data.Occupation,
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30)
      ]
    ],
    Age: [
      data.Age,
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3)
      ]
    ],
    DisplayName: [
      data.DisplayName,
      [
        
        Validators.minLength(1),
        Validators.maxLength(100)
      ]
    ],
    Gender: [
      data.Gender,
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ]
    ],
    isLandlord: [
      data.isLandlord,
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(200)
      ]
    ]
  });
}

async createUser() {
  const uid = await this.auth.uid();
  const id = this.user ? this.user.id : '';
    const data = {
      uid,
    createdAt: Date.now(),
    ...this.user,
    ...this.ProfileForm.value
  };

  this.db.updateAt(`users/${id}`, data);
  this.modal.dismiss();
}
}
