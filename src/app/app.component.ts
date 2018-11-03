import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'cw-app';
  public mobileScreen: boolean;
  window: number;

  ngOnInit() {
    this.window = $(window).width();
    if (this.window >= 751) {
      // 768px portrait
      this.mobileScreen = false;
    } else if ($(window).width() <= 750) {
      this.mobileScreen = true;
    }
    console.log(this.mobileScreen, this.window);
  }


  openSlideMenu() {
    document.getElementById('side-menu').style.width = 'auto';
    // document.getElementById('body').style.marginLeft = '250px';
  }
  closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0px';
    // document.getElementById('body').style.marginLeft = '0px';
  }

}
