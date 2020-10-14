import { InjectionToken } from '@angular/core';
import { EventInput as CalPostInfoInterface } from '@fullcalendar/core';

export const CalendarPostData = new InjectionToken<CalPostInfoInterface>('CalendarPostData');
