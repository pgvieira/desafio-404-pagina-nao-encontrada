import {Component, Input, OnInit} from '@angular/core';
import {MapTo} from "@adobe/aem-angular-editable-components";

@Component({
  selector: 'app-angular-page-body',
  templateUrl: './angular-page-body.component.html',
  styleUrls: ['./angular-page-body.component.scss']
})
export class AngularPageBodyComponent implements OnInit {
  @Input() bodytitle: string;
  @Input() bodycontent: string;
  @Input() bodybutton: string;

  constructor() { }

  ngOnInit(): void {
  }

}
MapTo('angularapp/components/angular-page-body-component')(AngularPageBodyComponent);
