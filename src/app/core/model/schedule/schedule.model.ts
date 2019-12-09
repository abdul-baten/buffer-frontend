import { CalendarEvent } from 'angular-calendar';

export interface ICalendarEvent extends CalendarEvent {
  imageUrls: string[];
  videoUrls?: string[];
  socialAccounts: string[];
}
