import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass'],
  animations: [
    trigger('openNav', [
      state(
        'closed',
        style({
          opacity: 1,
          transform: 'translateY(0)'
        })
      ),
      state(
        'open',
        style({
          opacity: 0,
          transform: 'translateY(-100%)'
        })
      ),
      transition('closed => open', animate('300ms ease-out')),
      transition('open => closed', animate('200ms ease-in'))
    ])
  ]
})
export class SideNavComponent implements OnInit {
  state = 'true';
  show: boolean;

  @Input()
  mobileScreen: boolean;

  @Input()
  sideNav: any;

  @Input()
  cover: any;

  @Input()
  closeNav: any;

  @Input()
  cSM: any;

  constructor(public el: ElementRef) {}

  ngOnInit() {
    this.show = true;
    console.log(this.state);
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition <= componentPosition) {
      this.state = 'true';
      this.show = true;
    } else {
      this.state = 'false';
      this.show = false;
    }
  }

  // openSlideMenu() {
  //   document.getElementById('side-menu').style.width = 'auto';
  //   // document.getElementById('body').style.marginLeft = '250px';
  // }
  // closeSlideMenu() {
  //   document.getElementById('side-menu').style.width = '0px';
  //   // document.getElementById('body').style.marginLeft = '0px';
  // }
  //  openNav() {
  //   document.getElementById('mySidenav').style.width = '320px';
  //   document.getElementById('body').style.marginRight = '320px';
  //   document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  // }

  // openNav() {
  //   document.getElementById('mySidenav').style.width = '320px';
  //   document.body.style.marginRight = '320px';
  //   document.getElementById('main').style.width = '320px';
  //   document.body.style.opacity = '0.5';
  // }

  // closeNav() {
  //   document.getElementById('mySidenav').style.width = '0';
  //   document.getElementById('body').style.marginRight = '0';
  //   document.body.style.backgroundColor = 'white';
  // }
}
