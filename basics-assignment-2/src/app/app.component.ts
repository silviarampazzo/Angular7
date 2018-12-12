import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  allowLogin = false;
  
  onUpdateUsername() {
    if (!this.username || this.username.trim() == ''){
        this.allowLogin = false;
    } else{
      this.allowLogin = true;
    }
  }

  onLogin() {
    this.username = '';
    this.allowLogin = false;
  }

}
