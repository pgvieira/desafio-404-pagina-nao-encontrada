import {Component, Input, OnInit} from '@angular/core';
import {MapTo} from "@adobe/aem-angular-editable-components";

@Component({
  selector: 'app-angular-page-footer',
  templateUrl: './angular-page-footer.component.html',
  styleUrls: ['./angular-page-footer.component.scss']
})
export class AngularPageFooterComponent implements OnInit {
  @Input() username: string;

  constructor() { }

  ngOnInit(): void {
  }

}
MapTo('angularapp/components/angular-page-footer-component')(AngularPageFooterComponent);
