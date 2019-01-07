import { Injectable } from '@angular/core';

// import store
import { Store } from 'app/store';

// Models
import { Menu } from 'models/menu';

// rxjs
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

// firebase
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable()
export class MenuService {

  menuDoc: AngularFirestoreDocument<Menu>;
  menu$: Menu;
// , ref => ref.orderBy('date')
// Observable stream for the filestore collection
  menus$: Observable<Menu[]> = this.afs.collection('menu', ref => ref.orderBy('timestamp', 'desc')).snapshotChanges()
      // map operator to get the document ID
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Menu;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
        // updating the store with the data
    })).pipe(tap(next => this.store.set('menu', next)));

  constructor(
    private store: Store,
// to connect to the Cloud Firestore database
    private afs: AngularFirestore,
  ) {}

  // get user hash ID from firebase, I may use this later to create user specific db entries
  // get uid() {
  //   return this.authService.user.uid;
  // }

  getMenu(id: string) {
    if (!id) { return of({});
    }
    return this.store.select<Menu[]>('menu')
    .pipe(
      filter(Boolean),
      map(menu => menu.find((menu: Menu) => menu.id === id)));
  }

  getMenuTitle(customId: string) {
    if (!customId) {
      return of({});
    }
    return this.store.select<Menu[]>('menu')
      .pipe(
        filter(Boolean),
        map(menu => menu.find((menu: Menu) => menu.title === customId)));
  }

  addMenu(menu: Menu, customId: string) {
    return this.afs.collection('menu').doc(customId).set(menu);
    //     return this.afs.doc(`menu/${this.uid}`).set(menu); this adds the user id to the database
  }

  updateMenu(id: string, menu: Menu) {
    return this.afs.doc(`menu/${id}`).update(menu);
  }

  removeMenu(id: string, menu: Menu) {
    return this.afs.doc(`menu/${id}`).delete();
  }
}
