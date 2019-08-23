import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UiapplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [UiapplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [UiapplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UiapplicationSharedModule {
  static forRoot() {
    return {
      ngModule: UiapplicationSharedModule
    };
  }
}
