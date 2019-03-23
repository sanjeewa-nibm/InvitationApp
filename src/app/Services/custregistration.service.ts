import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class CustregistrationService {
// customerList: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { }


  create(product) {
    alert('SUCCESS!! ');
    // return this.db.list('/products').push(product);
  }
  getAll() {
    // return this.db.list('/products');
  }
  get(productId) {
    // return this.db.object('/products/' + productId);
  }

  update(productId, product) {
    // // return this.db.object('/products/' + productId).update(product);
  }
  delete(productId) {
    //return this.db.object('/products/' + productId).remove();
  }

}
