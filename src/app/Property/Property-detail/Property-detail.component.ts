import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-Property-detail',
  templateUrl: './Property-detail.component.html',
  styleUrls: ['./Property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  Property$;

  constructor(private route: ActivatedRoute, private db: DbService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.Property$ = this.db.doc$(`Propertys/${id}`);
  }
}
