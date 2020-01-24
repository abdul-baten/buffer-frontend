// Core Modules
import { InjectionToken } from '@angular/core';

// Models
import { EventInput as CalPostInfoInterface } from '@fullcalendar/core';

const CALENDAR_POST_DATA = new InjectionToken<CalPostInfoInterface>('CALENDAR_POST_DATA');

export { CALENDAR_POST_DATA };
