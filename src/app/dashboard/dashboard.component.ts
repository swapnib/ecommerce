import { Component, OnInit } from '@angular/core';


/*component decorator*/
/*OnInit is a inteface which is having method ngOnInit which gets called on component initialization.*/
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
