import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {
  @Input() tabs:any[];
  constructor() { }
  ngOnInit() {
    console.log('tabs',this.tabs);
  }
}
