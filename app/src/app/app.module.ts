import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { imageserviceService } from '../app/services/imageservice/imageservice.service'

import { appDeclarations, appBootstrap, appProviders, appEntryComponents } from './config/declarations';
import { appImportModules } from './config/import-modules';
import { carouselserviceService } from './services/carouselservice/carouselservice.service'

@NgModule({
  declarations: [...appDeclarations],
  imports: [...appImportModules],
  providers: [...appProviders, imageserviceService, carouselserviceService],
  entryComponents: [...appEntryComponents],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [...appBootstrap]
})
export class AppModule { }
