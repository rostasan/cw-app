import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  slideShow1: true;
  slideShow2: false;
  slideShow3: false;
  slideShow4: false;

  constructor() {

  }

  ngOnInit() {

  }

}
