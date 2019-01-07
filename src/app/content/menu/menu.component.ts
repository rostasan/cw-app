import { Store } from 'app/store';
import { Menu } from 'models/menu';
import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from 'content/services/menu/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit, OnDestroy {

  menus$: Observable<Menu[]>;
  subscription: Subscription;
  menu: Menu[];
  menuIMG: any;

  constructor(
    private store: Store,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.menus$ = this.store.select<Menu[]>('menu');
    this.subscription = this.menuService.menus$.subscribe();
    console.log(this.menus$);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }
}
