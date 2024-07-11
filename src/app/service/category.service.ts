import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private fireStore:AngularFirestore) { }

  saveCategory(data: any){
    this.fireStore.collection('categories').add(data).then(ref =>{
      console.log('success');
    })
  }
}
