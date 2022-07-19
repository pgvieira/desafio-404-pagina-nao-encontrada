import {Component, Input, OnInit} from '@angular/core';
import {MapTo} from "@adobe/aem-angular-editable-components";

@Component({
  selector: 'app-angular-page-header',
  templateUrl: './angular-page-header.component.html',
  styleUrls: ['./angular-page-header.component.scss']
})
export class AngularPageHeaderComponent implements OnInit {
  @Input() pagetitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
MapTo('angularapp/components/angular-page-header-component')(AngularPageHeaderComponent);
