import { Component } from '@angular/core';
import { getLocaleTimeFormat } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  detailsVisible = false;
  buttonClicks = [];

  showDetails(){
      this.detailsVisible = !this.detailsVisible;
      var d = new Date();
      this.buttonClicks.push(d.toLocaleTimeString());
  }

  getColor(){
    return this.buttonClicks.length >= 5 ? 'blue' : 'white';
  }

}
