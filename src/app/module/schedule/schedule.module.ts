import { ButtonModule } from 'primeng/button';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule, DatePipe } from '@angular/common';
import { DashboardHeaderModule } from '../../shared/header/dashboard-header/dashboard-header.module';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HeaderComponent } from './components/header/header.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { NotificationService, ScheduleService } from 'src/app/core/service';
import { PostComponent } from './components/post/post.component';
import { reducer, schedulePostFeatureKey } from './reducer/calendar.reducer';
import { ScheduleComponent } from './container/schedule.component';
import { ScheduleEffects } from './effect/schedule.effects';
import { ScheduleFacade } from './facade/schedule.facade';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { SelectButtonModule } from 'primeng/selectbutton';
import { StoreModule } from '@ngrx/store';
import { ToolbarModule } from '../../shared/header/toolbar/toolbar.module';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [CalendarComponent, HeaderComponent, PostComponent, ScheduleComponent],
  imports: [
    ButtonModule,
    CarouselModule,
    CommonModule,
    DashboardHeaderModule,
    EffectsModule.forFeature([ScheduleEffects]),
    FormsModule,
    FullCalendarModule,
    LazyLoadImageModule,
    ScheduleRoutingModule,
    SelectButtonModule,
    StoreModule.forFeature(schedulePostFeatureKey, reducer),
    ToolbarModule,
    TooltipModule,
    MenuModule,
  ],
  providers: [DatePipe, ScheduleFacade, ScheduleService, NotificationService],
  entryComponents: [PostComponent, HeaderComponent],
})
export class ScheduleModule {}
