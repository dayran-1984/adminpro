import { NgModule } from "@angular/core";

//Routes
import { PAGES_ROUTES } from './pages.routes';

//Modules
import { SharedModule } from '../shared/shared.module';

//Components
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { ProgressComponent } from './progress/progress.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphics1Component
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphics1Component
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule {}
