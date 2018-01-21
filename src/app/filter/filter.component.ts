import { Component, OnInit, Input } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  someRange=[0, 50];
  @Input() filterInfo;
  constructor() { }

  ngOnInit() {
  }


  rangeValueChanged(event, start: any, end: any) {
    var start_el = this.getElement(start);
    var end_el = this.getElement(end);
    //start_el.innerText = event.startValue;
    //end_el.innerText = event.endValue;
  }

  getElement(data) {
    if (typeof (data) == 'string') {
      return document.getElementById(data);
    }
    if (typeof (data) == 'object' && data instanceof Element) {
      return data;
    }
    return null;
  }

}
