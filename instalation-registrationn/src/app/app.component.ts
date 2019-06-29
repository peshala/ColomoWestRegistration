import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  gscriptUrl = '/macros/s/AKfycbwZSM9uPJCyKKhVLPig9OL3FJEJkfGCup2Mgxy5tHOZyjgJo3o/exec';
  registered = false;
  loader = false;
  title = 'instalation-registrationn';
  object = {
    name: '',
    email: '',
    number: '',
    club: '',
    designation: ''
  };

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {

  }
  register() {
    this.loader = true;
    console.log(this.object);
    this.http.post(this.gscriptUrl, this.object).toPromise()
      .then((res) => {
        this.loader = false;
        console.log('Response completed', res);
        this.registered = !this.registered;
      })
      .catch((err) => {
        this.loader = false;
        console.log('Response failed', err);
        this.registered = !this.registered;
      });
  }
}
