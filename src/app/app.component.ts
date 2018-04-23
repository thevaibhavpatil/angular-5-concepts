import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';



const DOGS_KEY = makeStateKey('dogs');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  dogs: any;

  constructor(
    private http: HttpClient,
    private state: TransferState
  ) { }

  ngOnInit() {
    const self = this;
    this.dogs = this.state.get(DOGS_KEY, null as any);
    if (!this.dogs) {
      this.http
        .get('https://dog.ceo/api/breeds/list/all')
        .subscribe(data => {
          console.log(data);
          self.dogs = {...data};
          this.state.set(DOGS_KEY, data as any);
        });
    }
  }
}
