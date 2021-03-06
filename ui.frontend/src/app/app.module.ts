import { SpaAngularEditableComponentsModule } from "@adobe/aem-angular-editable-components";
import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import "./components/import-components";
import { ModelManagerService } from "./components/model-manager.service";
import { PageComponent } from "./components/page/page.component";

import { AemAngularCoreWcmComponentsTabsV1 } from "@adobe/aem-core-components-angular-spa/containers/tabs/v1";

import { AemAngularCoreWcmComponentsTitleV2 } from "@adobe/aem-core-components-angular-base/authoring/title/v2";
import { AemAngularCoreWcmComponentsBreadCrumbV2 } from "@adobe/aem-core-components-angular-base/layout/breadcrumb/v2";
import { AemAngularCoreWcmComponentsNavigationV1 } from "@adobe/aem-core-components-angular-base/layout/navigation/v1";
import { AemAngularCoreWcmComponentsButtonV1 } from "@adobe/aem-core-components-angular-base/authoring/button/v1";
import { AemAngularCoreWcmComponentsImageV2 } from "@adobe/aem-core-components-angular-base/authoring/image/v2";

import { AemAngularCoreWcmComponentsDownloadV1 } from "@adobe/aem-core-components-angular-base/authoring/download/v1";

import { AemAngularCoreWcmComponentsListV2 } from "@adobe/aem-core-components-angular-base/authoring/list/v2";
import { AemAngularCoreWcmComponentsSeparatorV1 } from "@adobe/aem-core-components-angular-base/authoring/separator/v1";
import { AemAngularCoreWcmComponentsAccordionV1 } from "@adobe/aem-core-components-angular-spa/containers/accordion/v1";
import { AemAngularCoreWcmComponentsLanguageNavigationV1 } from "@adobe/aem-core-components-angular-base/layout/language-navigation/v1";

import { AngularPageFooterComponent } from './components/angular-page-footer/angular-page-footer.component';
import { AngularPageBodyComponent } from './components/angular-page-body/angular-page-body.component';
import { AngularPageHeaderComponent } from './components/angular-page-header/angular-page-header.component';

@NgModule({
  imports: [
    BrowserModule,
    SpaAngularEditableComponentsModule,
    AppRoutingModule,
    AemAngularCoreWcmComponentsTabsV1,
    AemAngularCoreWcmComponentsTitleV2,
    AemAngularCoreWcmComponentsBreadCrumbV2,
    AemAngularCoreWcmComponentsNavigationV1,
    AemAngularCoreWcmComponentsButtonV1,
    AemAngularCoreWcmComponentsImageV2,
    AemAngularCoreWcmComponentsDownloadV1,
    AemAngularCoreWcmComponentsListV2,
    AemAngularCoreWcmComponentsAccordionV1,
    AemAngularCoreWcmComponentsSeparatorV1,
    AemAngularCoreWcmComponentsLanguageNavigationV1,
  ],
  providers: [ModelManagerService, { provide: APP_BASE_HREF, useValue: "/" }],
  declarations: [AppComponent, PageComponent, AngularPageFooterComponent, AngularPageBodyComponent, AngularPageHeaderComponent],
  entryComponents: [PageComponent, AngularPageFooterComponent, AngularPageBodyComponent, AngularPageHeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
