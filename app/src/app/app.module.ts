import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { imageserviceService } from '../app/services/imageservice/imageservice.service'

import { appDeclarations, appBootstrap, appProviders, appEntryComponents } from './config/declarations';
import { appImportModules } from './config/import-modules';

@NgModule({
  declarations: [...appDeclarations],
  imports: [...appImportModules],
  providers: [...appProviders, imageserviceService],
  entryComponents: [...appEntryComponents],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [...appBootstrap]
})
export class AppModule { }
