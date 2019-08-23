import { Component } from '@angular/core';
// import  "src/assets/sdk/test.js";
// import  from "assets/sdk/test.js";

declare var myf: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'yjd项目';

  test() {
    myf();
    console.log("2222222222222222222222222222222222");
  }

  ngOnInit() {
    console.log("2222222222222222222222222222222222");
    myf();
  }
}
