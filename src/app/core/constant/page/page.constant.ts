import { PageInterface } from '@core/model/page/page.model';

const PAGES: PageInterface = {
  LANDING_PAGE: {
    PAGE_ROUTE: '',
    PAGE_TITLE: 'Buffer',
  },
  SIGN_IN_PAGE: {
    PAGE_ROUTE: 'enter',
    PAGE_TITLE: 'Sign In - Buffer',
  },
  SIGN_UP_PAGE: {
    PAGE_ROUTE: 'join',
    PAGE_TITLE: 'Sign Up - Buffer',
  },
  SCHEDULE_PAGE: {
    PAGE_ROUTE: 'schedule',
    PAGE_TITLE: 'Schedule - Buffer',
  },
  ACCOUNT_PAGE: {
    PAGE_ROUTE: 'account',
    PAGE_TITLE: 'Account - Buffer',
  },
  ACCOUNT_PROFILE_PAGE: {
    PAGE_ROUTE: 'profile',
    PAGE_TITLE: 'Profile - Buffer',
  },
  ACCOUNT_INVOICE_PAGE: {
    PAGE_ROUTE: 'invoice',
    PAGE_TITLE: 'Invoice - Buffer',
  },
  ACCOUNT_BILLING_PAGE: {
    PAGE_ROUTE: 'billing',
    PAGE_TITLE: 'Billing - Buffer',
  },
  BUCKET_PAGE: {
    PAGE_ROUTE: 'bucket',
    PAGE_TITLE: 'Bucket - Buffer',
  },
  BUCKET_SCHEDULED_PAGE: {
    PAGE_ROUTE: 'scheduled',
    PAGE_TITLE: 'Scheduled Posts - Buffer',
  },
  BUCKET_PUBLISHED_PAGE: {
    PAGE_ROUTE: 'published',
    PAGE_TITLE: 'Published Posts - Buffer',
  },
  BUCKET_SAVED_PAGE: {
    PAGE_ROUTE: 'saved',
    PAGE_TITLE: 'Saved Posts - Buffer',
  },
};

export { PAGES };
