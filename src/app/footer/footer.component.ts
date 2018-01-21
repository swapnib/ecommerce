import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer: any = {
    links: [[{
      title: 'Help',
      type: 'heading',
      url: '#'
    }, {
      title: 'Payments',
      url: '#'
    }, {
      title: 'Shipping',
      url: '#'
    }, {
      title: 'Cancellation and Returns',
      url: '#'
    }, {
      title: 'FAQ',
      url: '#'
    }, {
      title: 'Report imfrigement',
      url: '#'
    }], [{
      title: 'FLIPKART',
      type: 'heading',
      url: '#'
    }, {
      title: 'Contact Us',
      url: '#'
    }, {
      title: 'About Us',
      url: '#'
    }, {
      title: 'Careers',
      url: '#'
    }, {
      title: 'Flipkart stories',
      url: '#'
    }, {
      title: 'Press',
      url: '#'
    }, {
      title: 'Sell on flipkart',
      url: '#'
    }], [{
      title: 'MISC',
      type: 'heading',
      url: '#'
    }, {
      title: 'Online Shopping',
      url: '#'
    }, {
      title: 'Affilliate program',
      url: '#'
    }, {
      title: 'Gift Card',
      url: '#'
    }, {
      title: 'Flipkart first subscription',
      url: '#'
    }, {
      title: 'sitemap',
      url: '#'
    }]
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
