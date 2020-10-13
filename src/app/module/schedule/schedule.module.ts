import { ButtonModule } from 'primeng/button';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { DashboardHeaderModule } from '../../shared/header/dashboard-header/dashboard-header.module';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HeaderComponent } from './components/header/header.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { PostComponent } from './components/post/post.component';
import { ScheduleComponent } from './container/schedule.component';
import { ScheduleFacade } from './facade/schedule.facade';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToolbarModule } from '../../shared/header/toolbar/toolbar.module';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [CalendarComponent, HeaderComponent, PostComponent, ScheduleComponent],
  imports: [
    ButtonModule,
    CarouselModule,
    CommonModule,
    DashboardHeaderModule,
    FormsModule,
    FullCalendarModule,
    LazyLoadImageModule,
    MenuModule,
    ScheduleRoutingModule,
    SelectButtonModule,
    ToolbarModule,
    TooltipModule
  ],
  providers: [ScheduleFacade]
})
export class ScheduleModule {}
