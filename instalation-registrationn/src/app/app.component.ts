import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  registered = false;
  loader = false;
  title = 'instalation-registrationn';
  ngOnInit() {

  }
  register() {
    this.registered = !this.registered;
  }
}
