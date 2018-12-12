import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.css']
})
export class ButtonClickComponent implements OnInit {
  currentTime = '';

  constructor() { 
    var d = new Date();
    this.currentTime = d.toLocaleTimeString();

  }

  ngOnInit() {
  }

}
