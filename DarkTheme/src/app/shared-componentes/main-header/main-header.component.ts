import { Component } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {

    public icon : string = "Mon";

    constructor(){}

    public changeTheme(){
      if(this.icon == "Mon") this.icon = "Sun";
      else this.icon = "Mon";
      document.body.classList.toggle('dark-theme');
    }
}
