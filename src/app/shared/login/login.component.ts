import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
