import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  public pages: any[] = [
    {title: 'Home', url: '/home', icon: 'home'},
    {title: 'Profile', url: '/profile', icon: 'person'},
    {title: 'Manage Your Posts', url: '/user-posts', icon: 'albums'},
    // {title: 'About Us', url: '/about', icon: 'information-circle'},
    {title: 'Sign Out', url: '', icon: 'log-out', route: '/login'},
  ];

  
}
