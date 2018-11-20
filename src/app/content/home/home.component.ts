import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        // each time the binding value changes
        query(':leave', [
          stagger(100, [animate('0.5s', style({ opacity: 0 }))])
        ]),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [animate('0.5s', style({ opacity: 1 }))])
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  slideShow: 'image-1';

  hidden: boolean;
  id: number;
  timeout: any;
  imgArr = [
    '../../../assets/images/home/chicken-saladbar-masthead.jpg',
    '../../../assets/images/home/CW-chicken-salad-header-1024x372.jpg'
  ];
  src = '';
  constructor() {
  }

  ngOnInit() {

    this.imageLoop(this.imgArr);
  }


  imageLoop(imgArr) {
    let i: any;
    for (i = 0; i < 100; ++i) {
      this.setDelay(i);
    }
  }
  setDelay(i) {
  setTimeout(() => this.src = this.imgArr[i % 2], i * 6000);
  // console.log(this);
  }
}


