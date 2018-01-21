import { Component, OnInit } from '@angular/core';


/*component decorator*/
/*OnInit is a inteface which is having method ngOnInit which gets called on component initialization.*/
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboard :any=[{
    title:'TV and Electronics',
    url:'#',
    type:'heading'
  },{
    title:'',
    url:'#',
    imageUrl:'assets/images/eee185.jpg',
    type:'banner'
  },{
    title:'',
    url:'#',
    imageUrl:'assets/images/599c17.jpg',
    type:'banner'
  },
  {
    title:'',
    url:'#',
    imageUrl:['assets/images/b40a28.jpg','assets/images/1dd09d.jpg','assets/images/41c1e4.jpg'],
    type:'smallBanner'
  },{
    title:'',
    url:'#',
    imageUrl:['assets/images/b40a28.jpg','assets/images/1dd09d.jpg','assets/images/41c1e4.jpg'],
    type:'smallBanner'
  },{
    title:'',
    url:'#',
    imageUrl:'assets/images/bd8134.jpg',
    type:'banner'
  },
  {
    title:'',
    url:'#',
    imageUrl:['assets/images/d1509f.jpg','assets/images/01568a.jpg','assets/images/dc488b.jpg'],
    type:'smallBanner'
  },{
    title:'',
    url:'#',
    imageUrl:'assets/images/245ccd.jpg',
    type:'banner'
  }
];

constructor() { }

ngOnInit() {
}

}
