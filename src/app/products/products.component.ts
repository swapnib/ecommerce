import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = {
    filterInfo: [
      {
        title:'PRICE',
        type: 'price'
      }, {
        title: 'Size',
        type: 'options',
        options: ['S', 'M', 'L', 'XL', 'XXL']
      }, {
        title: 'SLEEVE ',
        type: 'options',
        options: ['Sleeve',
          'Cap Sleeve',
          'Full Sleeve',
          'Half Sleeve',
          'Layered Sleeve',
          'Puff Sleeve',
          'Roll-up Sleeve',
          'Short Sleeve',
          'Sleeveless']
      }, {
        title: 'Color ',
        type: 'options',
        options: ['White',
          'Red',
          'Green',
          'Blue',
          'Brown',
          'Yellow',
          'Black',
          'Gray',
          'Golden']
      }, {
        title: 'Discount ',
        type: 'options',
        options: ['10%',
          '20%',
          '30%',
          '40%',
          '50%',
          '60%',
          '70%',
          '80%',
          '90%']
      }, {
        title: 'Offers ',
        type: 'options',
        options: ['Bank Offer',
          'Buy More,Save More',
          'Special Price'
        ]
      }
    ],
    productsInfo: [
      [{
        title: 'Billion PerfectFit Solid Men Henley Multicolor T-Shirt',
        imgUrl: 'assets/images/l-ekp1041600788mediumgreysolid-peter-england-original-imaexxbywhxvfh87.jpeg',
        url: '',
        price: '1999',
        discountPrice: '436',
        discountPerc: '65',
        rating: '4.1',
        noOfReview: '2222',
        offer: 'Special price & 1 more',
        size: 'XL,M,L,XXL'
      }, {
        title: 'Billion PerfectFit Solid Men Henley Multicolor T-Shirt',
        imgUrl: 'assets/images/l-ekp1041600788mediumgreysolid-peter-england-original-imaexxbywhxvfh87.jpeg',
        url: '',
        price: '1999',
        discountPrice: '436',
        discountPerc: '65',
        rating: '4.1',
        noOfReview: '2222',
        offer: 'Special price & 1 more',
        size: 'XL,M,L,XXL'
      }, {
        title: 'Billion PerfectFit Solid Men Henley Multicolor T-Shirt',
        imgUrl: 'assets/images/l-ekp1041600788mediumgreysolid-peter-england-original-imaexxbywhxvfh87.jpeg',
        url: '',
        price: '1999',
        discountPrice: '436',
        discountPerc: '65',
        rating: '4.1',
        noOfReview: '2222',
        offer: 'Special price & 1 more',
        size: 'XL,M,L,XXL'
      }], [{
        title: 'Billion PerfectFit Solid Men Henley Multicolor T-Shirt',
        imgUrl: 'assets/images/l-ekp1041600788mediumgreysolid-peter-england-original-imaexxbywhxvfh87.jpeg',
        url: '',
        price: '1999',
        discountPrice: '436',
        discountPerc: '65',
        rating: '4.1',
        noOfReview: '2222',
        offer: 'Special price & 1 more',
        size: 'XL,M,L,XXL'
      }, {
        title: 'Billion PerfectFit Solid Men Henley Multicolor T-Shirt',
        imgUrl: 'assets/images/l-ekp1041600788mediumgreysolid-peter-england-original-imaexxbywhxvfh87.jpeg',
        url: '',
        price: '1999',
        discountPrice: '436',
        discountPerc: '65',
        rating: '4.1',
        noOfReview: '2222',
        offer: 'Special price & 1 more',
        size: 'XL,M,L,XXL'
      }, {
        title: 'Billion PerfectFit Solid Men Henley Multicolor T-Shirt',
        imgUrl: 'assets/images/l-ekp1041600788mediumgreysolid-peter-england-original-imaexxbywhxvfh87.jpeg',
        url: '',
        price: '1999',
        discountPrice: '436',
        discountPerc: '65',
        rating: '4.1',
        noOfReview: '2222',
        offer: 'Special price & 1 more',
        size: 'XL,M,L,XXL'
      }], [{
        title: 'Billion PerfectFit Solid Men Henley Multicolor T-Shirt',
        imgUrl: 'assets/images/l-ekp1041600788mediumgreysolid-peter-england-original-imaexxbywhxvfh87.jpeg',
        url: '',
        price: '1999',
        discountPrice: '436',
        discountPerc: '65',
        rating: '4.1',
        noOfReview: '2222',
        offer: 'Special price & 1 more',
        size: 'XL,M,L,XXL'
      }, {
        title: 'Billion PerfectFit Solid Men Henley Multicolor T-Shirt',
        imgUrl: 'assets/images/l-ekp1041600788mediumgreysolid-peter-england-original-imaexxbywhxvfh87.jpeg',
        url: '',
        price: '1999',
        discountPrice: '436',
        discountPerc: '65',
        rating: '4.1',
        noOfReview: '2222',
        offer: 'Special price & 1 more',
        size: 'XL,M,L,XXL'
      }, {
        title: 'Billion PerfectFit Solid Men Henley Multicolor T-Shirt',
        imgUrl: 'assets/images/l-ekp1041600788mediumgreysolid-peter-england-original-imaexxbywhxvfh87.jpeg',
        url: '',
        price: '1999',
        discountPrice: '436',
        discountPerc: '65',
        rating: '4.1',
        noOfReview: '2222',
        offer: 'Special price & 1 more',
        size: 'XL,M,L,XXL'
      }]
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
