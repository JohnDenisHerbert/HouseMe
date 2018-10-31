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

  Property: Observable<any[]>;


  filter = new BehaviorSubject(null);

  constructor(
    public db: DbService,
    public modal: ModalController,
    public auth: AuthService
  ) {}

  ngOnInit() {
    this.Propertys = this.auth.user$.pipe(
      switchMap(user =>
        this.db.collection$('Propertys', ref =>
          ref
            
            .orderBy('createdAt', 'desc')
            .limit(100)
        )
      ),
      shareReplay(1)
    );

    this.filtered = this.filter.pipe(
      switchMap(status => {
        return this.Propertys.pipe(
          map(arr =>
            (arr as any[]).filter(
              obj => (status ? obj.status === status : true)
            )
          )
        );
      })
    );
  }
}
