import { ChownowComponent } from './content/chownow/chownow.component';
import { ContactComponent } from './content/contact/contact.component';
import { CommunityComponent } from './content/community/community.component';
import { CateringComponent } from './content/catering/catering.component';
import { MenuComponent } from './content/menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';

import { HomeComponent } from './content/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'catering', component: CateringComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'community', component: CommunityComponent },
  // external links
  {
    path: 'chownow',
    component: ChownowComponent,
    resolve: {
      url: 'externalUrlRedirectResolver'
    },
    data: {
      externalUrl: 'http://ordering.chownow.com/order/11109/locations'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      scrollPositionRestoration: 'enabled'
    })
  ],
  providers: [
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        window.location.href = (route.data as any).externalUrl;
      }
    }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  ModuleWithProviders = RouterModule.forRoot(routes);
}
