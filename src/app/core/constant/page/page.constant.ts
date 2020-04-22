import { IPageRoute } from '@core/model/page/page.model';

const PAGES: IPageRoute = {
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
  FORGOT_PASSWORD_PAGE: {
    PAGE_ROUTE: 'forgot-password',
    PAGE_TITLE: 'Forgot Password - Buffer',
  },
  DASHBOARD_PAGE: {
    PAGE_ROUTE: 'dashboard',
    PAGE_TITLE: 'Dashboard - Buffer',
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
  ANALYZE_PAGE: {
    PAGE_ROUTE: 'analyze',
    PAGE_TITLE: 'Analyze - Buffer',
  },
  ANALYZE_FACEBOOK_PAGE: {
    PAGE_ROUTE: 'facebook',
    PAGE_TITLE: 'Analyze | Facebook - Buffer',
  },
  ANALYZE_FACEBOOK_OVERVIEW_PAGE: {
    PAGE_ROUTE: 'overview',
    PAGE_TITLE: 'Analyze | Facebook - Buffer',
  },
  ANALYZE_FACEBOOK_POSTS_PAGE: {
    PAGE_ROUTE: 'posts',
    PAGE_TITLE: 'Analyze | Facebook - Buffer',
  },
  ANALYZE_FACEBOOK_AUDIENCE_PAGE: {
    PAGE_ROUTE: 'audience',
    PAGE_TITLE: 'Analyze | Facebook - Buffer',
  },
  CONNECTION_MODULE: {
    PAGE_ROUTE: 'connection',
    PAGE_TITLE: 'Connection - Buffer',
    ROUTES: {
      CONNECTION_NEW_PAGE: {
        PAGE_ROUTE: 'new',
        PAGE_TITLE: 'New Connection - Buffer',
      },
      CONNECTION_CHOOSE_PAGE: {
        PAGE_ROUTE: 'choose',
        PAGE_TITLE: 'Connect a New Social Account - Buffer',
      },
      CONNECTION_FB_PAGE: {
        PAGE_ROUTE: 'facebook-page',
        PAGE_TITLE: 'Add a Facebook Page | Connection - Buffer',
      },
      CONNECTION_FB_GROUP: {
        PAGE_ROUTE: 'facebook-group',
        PAGE_TITLE: 'Add a Facebook Group | Connection - Buffer',
      },
      CONNECTION_TWITTER_PROFILE: {
        PAGE_ROUTE: 'twitter',
        PAGE_TITLE: 'Add a Twitter Profile | Connection - Buffer',
      },
      CONNECTION_LINKEDIN_PAGE: {
        PAGE_ROUTE: 'linkedin-page',
        PAGE_TITLE: 'Add a LinkedIn Page | Connection - Buffer',
      },
      CONNECTION_LINKEDIN_PROFILE: {
        PAGE_ROUTE: 'linkedin-profile',
        PAGE_TITLE: 'Add a LinkedIn Profile | Connection - Buffer',
      },
    },
  },
};

export { PAGES };
