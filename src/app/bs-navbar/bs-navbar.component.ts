import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  productCategories: any[] = [
    {
      id: 1,
      name: 'Electronics',
      show: false
    },
    {
      id: 2,
      name: 'Appliances',
      show: false
    },
    {
      id: 3,
      name: 'Men',
      show: false
    },
    {
      id: 4,
      name: 'Women',
      show: false
    },
    {
      id: 5,
      name: 'Baby & Kids',
      show: false
    },
    {
      id: 6,
      name: 'Home & Furniture',
      show: false
    },
    {
      id: 7,
      name: 'Sports Books & More',
      show: false
    },
    {
      id: 8,
      name: 'Offer Zone',
      show: false
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  mouseEnter(productCategory: any) {
    console.log("mouse enter : " + productCategory);
    productCategory.show = true;
  }

  mouseLeave(productCategory: any) {
    console.log('mouse leave :' + productCategory);
    productCategory.show = false;
  }

}
