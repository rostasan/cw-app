import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

@Input()
  mobileScreen: boolean;
@Input()
  oSM: any;
@Input()
  cSM: any;

  constructor() {}

  ngOnInit() {

    console.log(this.mobileScreen);
  }

}
