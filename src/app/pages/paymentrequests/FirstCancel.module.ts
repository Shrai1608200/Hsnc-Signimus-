import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { ThemeModule } from '../../@theme/theme.module';
import { FirstCancelComponent } from './FirstCancel.component';
import { NbAccordionModule, NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NbAccordionModule,
    FormsModule,
    RouterModule,
    NbCardModule,
   
  ],
  declarations: [
    FirstCancelComponent,
  ],
  providers: []
})
export class FirstCancelModule {
}