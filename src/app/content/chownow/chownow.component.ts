import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chownow',
  templateUrl: './chownow.component.html',
  styleUrls: ['./chownow.component.sass']
})
export class ChownowComponent implements OnInit {

  @Input()
  mobileScreen: boolean;

constructor() { }

  ngOnInit() {
  }

}
