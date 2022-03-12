import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.page.html',
  styleUrls: ['./user-posts.page.scss'],
})
export class UserPostsPage implements OnInit {

  slideOpts = {};
  stories: any[] = [];
  buttonValue = 'grid';
  buttonItems: any[] = [];
  posts: any[] = [];

  constructor() { }

  ngOnInit() {
   
    this.slideOpts = {    
      slidesPerView: this.checkScreen(),
      slideShadows: true
    };
    this.buttonItems = [
      {value: 'grid', icon: 'albums'},
      {value: 'favorites', icon: 'heart'},
    ];
    this.posts = [
      { id: 1, url: 'assets/images/highlights/h1.jpg'},
      { id: 2, url: 'assets/images/highlights/h2.png'},
      { id: 3, url: 'assets/images/highlights/h3.jpg'},
      { id: 4, url: 'assets/images/highlights/h4.jpg'},
      { id: 9, url: 'assets/images/food/f1.jpeg'},
      { id: 6, url: 'assets/images/food/f2.jpeg'},
      { id: 5, url: 'assets/images/highlights/h1.jpg'},
      { id: 8, url: 'assets/images/highlights/h2.png'},
      { id: 7, url: 'assets/images/highlights/h3.jpg'},
      { id: 10, url: 'assets/images/highlights/h4.jpg'},
      { id: 11, url: 'assets/images/food/f1.jpeg'},
      { id: 12, url: 'assets/images/food/f2.jpeg'},
    ];
  }

  checkScreen() {
    let innerWidth = window.innerWidth;
    console.log(innerWidth);
    switch (true) {
      case 340 > innerWidth:
        return this.checkLength(5.5);
      case 340 <= innerWidth && innerWidth <= 400:
        return this.checkLength(5.5);
      case 401 <= innerWidth && innerWidth <= 700:
        return this.checkLength(6.5);
      case 701 <= innerWidth && innerWidth <= 900:
        return this.checkLength(7.5);
      case 901 <= innerWidth:
        return this.checkLength(9.5);
    }
  }

  
  checkLength(val) {
    let length = this.stories.length;
    return val < length ? val : length;
  }

  buttonsChanged(event) {
    console.log(event.detail.value);
    this.buttonValue = event.detail.value;
  }

}
