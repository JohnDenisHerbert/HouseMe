import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import * as firestore from 'firebase/app'

export interface Post {
  Age: number;
  Name: string;
  Occupation: string;
}

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private postRef: AngularFirestoreCollection<Post>;

  constructor(private afs: AngularFirestore){
    this.postRef = this.afs.collection('CRUD');
  }
  
  getRecentPosts() {
    return this.afs.collection('CRUD', ref =>
    ref.orderBy('Age', 'desc')
    .limit(10)
    )
  }

  createPost(data: Post) {

  }
}
