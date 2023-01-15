import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<a [routerLink] = "['admin']">Admin</a>
  <br>
  <a [routerLink] = "['']">Sign</a>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'AuthLogin';
}
