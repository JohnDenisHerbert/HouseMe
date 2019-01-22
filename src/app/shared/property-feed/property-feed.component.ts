import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, map, shareReplay } from 'rxjs/operators';
import { DbService } from '../../services/db.service';
import { AuthService } from '../../services/auth.service';

import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-property-feed',
  templateUrl: './property-feed.component.html',
  styleUrls: ['./property-feed.component.scss']
})
export class PropertyFeedComponent implements OnInit {

  Propertys;
  filtered;
user;
  Property: Observable<any[]>;

  Location;

  filter = new BehaviorSubject(null);

  constructor(
    public db: DbService,
    public modal: ModalController,
    public auth: AuthService
  ) {}

  async ngOnInit() {
    const uid = await this.auth.uid();
    const id = this.user ? this.user.uid : '';

    /*this.Location = 
        this.db.collection$(`users/${uid}`, data =>
          data
         .is('City')
        ),
      shareReplay(1)
    ;*/

    this.Propertys = this.auth.user$.pipe(
      switchMap(user =>
        this.db.collection$('Propertys', ref =>
          {
            return ref
              .where('City', '==', this.db.collection$(`users/${uid}`, data =>
              data
             .is('City'))
              //.where('City', '==', 'Cork')
           //   .orderBy('createdAt', 'desc')
          //   .limit(100);
          
        )
          }
      )
      ),
      shareReplay(1)
    );

  

    this.filtered = this.Propertys.pipe(
      switchMap(filter => {
        return this.Propertys.pipe('users', ref =>
        ref
        .where('City', '==', )
       
        );
      })
    );
  }
}
1