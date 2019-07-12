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
  loading = false;
  title = 'instalation-registrationn';
  object = {
    number: ''
  };
  searchKey = '';
  contacts = [];

  constructor(private http: HttpClient, ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this.http.get(this.gscriptUrl)
      .subscribe((res: any) => {
        this.contacts = [];
        res.forEach(val => {
          this.contacts.push(val[4].toString());
        });
        console.log(this.contacts);
        this.loading = false;
      });
  }

  search() {
    console.log(this.searchKey);
    const value = this.contacts.indexOf(this.searchKey);
    if (value > -1) {
      this.registered = true;
    } else {
      this.registered = false;
    }
  }

  refresh() {
    this.getUsers();
  }
}
