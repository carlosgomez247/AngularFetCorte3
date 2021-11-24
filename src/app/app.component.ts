import { Component } from '@angular/core';
import {TestService} from './services/test.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  list = <any>[];

  constructor(private test : TestService ){
    test.getPosts().subscribe( datos => this.list = datos )
  }


  
}
