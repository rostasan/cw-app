import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CommunityComponent } from './community/community.component';
import { CateringComponent } from './catering/catering.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { LocationComponent } from './location/location.component';
import { ChownowComponent } from './chownow/chownow.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HomeComponent,
    CommunityComponent,
    CateringComponent,
    MenuComponent,
    ContactComponent,
    LocationComponent,
    ChownowComponent
  ],
  exports: [ChownowComponent]
})
export class ContentModule {}
