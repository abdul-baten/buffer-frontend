import { I_PAGE } from '../model';

const PAGES: I_PAGE = {
  LANDING_PAGE: {
    PAGE_ROUTE: '',
    PAGE_TITLE: 'Buffer',
  },
  PRICING_PAGE: {
    PAGE_ROUTE: 'price',
    PAGE_TITLE: 'Pricing - Buffer',
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
    PAGE_ROUTE: 'schedule/:id',
    PAGE_TITLE: 'Schedule - Buffer',
  },
  ACCOUNT_MODULE: {
    PAGE_ROUTE: 'account',
    PAGE_TITLE: 'Account - Buffer',
    ROUTES: {
      PROFILE_MODULE: {
        PAGE_ROUTE: 'profile',
        PAGE_TITLE: 'Profile | Account - Buffer',
        ROUTES: {
          EDIT_PROFILE_PAGE: {
            PAGE_ROUTE: 'edit-profile',
            PAGE_TITLE: 'Edit Profile | Account - Buffer',
          },
          EDIT_EMAIL_PAGE: {
            PAGE_ROUTE: 'edit-email',
            PAGE_TITLE: 'Edit Email | Account - Buffer',
          },
          EDIT_PASSWORD_PAGE: {
            PAGE_ROUTE: 'change-password',
            PAGE_TITLE: 'Edit Password | Account - Buffer',
          },
        },
      },
      INVOICE_MODULE: {
        PAGE_ROUTE: 'invoice',
        PAGE_TITLE: 'Invoice | Account - Buffer',
      },
      BILLING_MODULE: {
        PAGE_ROUTE: 'billing',
        PAGE_TITLE: 'Billing | Account - Buffer',
      },
      PLAN_MODULE: {
        PAGE_ROUTE: 'plan',
        PAGE_TITLE: 'Plan | Account - Buffer',
      },
    },
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
    PAGE_ROUTE: 'analyze/facebook/:id',
    PAGE_TITLE: 'Analyze | Facebook - Buffer',
  },
  ANALYZE_INSTAGRAM_PAGE: {
    PAGE_ROUTE: 'instagram/:id',
    PAGE_TITLE: 'Analyze | Instagram - Buffer',
  },
  CONNECTION_MODULE: {
    PAGE_ROUTE: 'connection',
    PAGE_TITLE: 'Connection - Buffer',
    ROUTES: {
      CONNECTION_CHOOSE_PAGE: {
        PAGE_ROUTE: 'choose',
        PAGE_TITLE: 'Connect - Buffer',
      },
      CONNECTION_FB_PAGE: {
        PAGE_ROUTE: 'facebook-page',
        PAGE_TITLE: 'Add a Facebook Page | Connection - Buffer',
      },
      CONNECTION_FB_GROUP: {
        PAGE_ROUTE: 'facebook-group',
        PAGE_TITLE: 'Add a Facebook Group | Connection - Buffer',
      },
      CONNECTION_IG_BUSINESS: {
        PAGE_ROUTE: 'instagram-business',
        PAGE_TITLE: 'Add a Instagram Business Account | Connection - Buffer',
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
      CONNECTION_PROFILES: {
        PAGE_ROUTE: 'profiles',
        PAGE_TITLE: 'Connected Profile | Connection - Buffer',
      },
    },
  },
  VIDEO_MODULE: {
    PAGE_ROUTE: 'video/:id',
    PAGE_TITLE: 'Video - Buffer',
  },
};

export { PAGES };
