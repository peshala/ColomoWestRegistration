import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss']
})
export class PhoneInputComponent implements OnInit {
  gscriptUrl = '/macros/s/AKfycbwZSM9uPJCyKKhVLPig9OL3FJEJkfGCup2Mgxy5tHOZyjgJo3o/exec';
  registered = false;
  loader = false;
  title = 'instalation-registrationn';
  object = {
    number: ''
  };

  constructor(private http: HttpClient, ) { }

  ngOnInit() {
  }

  register() {
    // this.loader = true;
    // console.log(this.object);
    // this.http.post(this.gscriptUrl, this.object).toPromise()
    //   .then((res) => {
    //     this.loader = false;
    //     console.log('Response completed', res);
    //     this.registered = !this.registered;
    //   })
    //   .catch((err) => {
    //     this.loader = false;
    //     console.log('Response failed', err);
    //     this.registered = !this.registered;
    //   });
  }
}
