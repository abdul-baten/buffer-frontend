export const PAGES = {
  LANDING_PAGE: {
    PAGE_ROUTE: '',
    PAGE_TITLE: 'Buffer',
  },
  PRICING_PAGE: {
    PAGE_ROUTE: 'price',
    PAGE_TITLE: 'Pricing',
  },
  SIGN_IN_PAGE: {
    PAGE_ROUTE: 'enter',
    PAGE_TITLE: 'Sign In',
  },
  SIGN_UP_PAGE: {
    PAGE_ROUTE: 'join',
    PAGE_TITLE: 'Sign Up',
  },
  FORGOT_PASSWORD_PAGE: {
    PAGE_ROUTE: 'forgot-password',
    PAGE_TITLE: 'Forgot Password',
  },
  DASHBOARD_PAGE: {
    PAGE_ROUTE: 'dashboard',
    PAGE_TITLE: 'Dashboard',
  },
  SCHEDULE_PAGE: {
    PAGE_ROUTE: 'schedule/:id',
    PAGE_TITLE: 'Schedule',
  },
  ACCOUNT_MODULE: {
    PAGE_ROUTE: 'account',
    PAGE_TITLE: 'Account',
    ROUTES: {
      PROFILE_MODULE: {
        PAGE_ROUTE: 'profile',
        PAGE_TITLE: 'Profile | Account',
        ROUTES: {
          EDIT_PROFILE_PAGE: {
            PAGE_ROUTE: 'edit-profile',
            PAGE_TITLE: 'Edit Profile | Account',
          },
          EDIT_EMAIL_PAGE: {
            PAGE_ROUTE: 'edit-email',
            PAGE_TITLE: 'Edit Email | Account',
          },
          EDIT_PASSWORD_PAGE: {
            PAGE_ROUTE: 'change-password',
            PAGE_TITLE: 'Edit Password | Account',
          },
        },
      },
      INVOICE_MODULE: {
        PAGE_ROUTE: 'invoice',
        PAGE_TITLE: 'Invoice | Account',
      },
      BILLING_MODULE: {
        PAGE_ROUTE: 'billing',
        PAGE_TITLE: 'Billing | Account',
      },
      PLAN_MODULE: {
        PAGE_ROUTE: 'plan',
        PAGE_TITLE: 'Plan | Account',
      },
    },
  },
  BUCKET_PAGE: {
    PAGE_ROUTE: 'bucket',
    PAGE_TITLE: 'Bucket',
  },
  BUCKET_SCHEDULED_PAGE: {
    PAGE_ROUTE: 'scheduled',
    PAGE_TITLE: 'Scheduled Posts',
  },
  BUCKET_PUBLISHED_PAGE: {
    PAGE_ROUTE: 'published',
    PAGE_TITLE: 'Published Posts',
  },
  BUCKET_SAVED_PAGE: {
    PAGE_ROUTE: 'saved',
    PAGE_TITLE: 'Saved Posts',
  },
  ANALYZE_PAGE: {
    PAGE_ROUTE: 'analyze',
    PAGE_TITLE: 'Analyze',
  },
  ANALYZE_FACEBOOK_PAGE: {
    PAGE_ROUTE: 'facebook/:id',
    PAGE_TITLE: 'Analyze | Facebook',
  },
  ANALYZE_INSTAGRAM_PAGE: {
    PAGE_ROUTE: 'instagram/:id',
    PAGE_TITLE: 'Analyze | Instagram',
  },
  CONNECTION_MODULE: {
    PAGE_ROUTE: 'connection',
    PAGE_TITLE: 'Connection',
    ROUTES: {
      CONNECTION_CHOOSE_PAGE: {
        PAGE_ROUTE: 'choose',
        PAGE_TITLE: 'Connect',
      },
      CONNECTION_FB_PAGE: {
        PAGE_ROUTE: 'facebook-page',
        PAGE_TITLE: 'Add a Facebook Page | Connection',
      },
      CONNECTION_FB_GROUP: {
        PAGE_ROUTE: 'facebook-group',
        PAGE_TITLE: 'Add a Facebook Group | Connection',
      },
      CONNECTION_IG_BUSINESS: {
        PAGE_ROUTE: 'instagram-business',
        PAGE_TITLE: 'Add a Instagram Business Account | Connection',
      },
      CONNECTION_TWITTER_PROFILE: {
        PAGE_ROUTE: 'twitter',
        PAGE_TITLE: 'Add a Twitter Profile | Connection',
      },
      CONNECTION_LINKEDIN_PAGE: {
        PAGE_ROUTE: 'linkedin-page',
        PAGE_TITLE: 'Add a LinkedIn Page | Connection',
      },
      CONNECTION_LINKEDIN_PROFILE: {
        PAGE_ROUTE: 'linkedin-profile',
        PAGE_TITLE: 'Add a LinkedIn Profile | Connection',
      },
      CONNECTION_PROFILES: {
        PAGE_ROUTE: 'profiles',
        PAGE_TITLE: 'Connected Profile | Connection',
      },
    },
  },
  VIDEO_MODULE: {
    PAGE_ROUTE: 'video/:id',
    PAGE_TITLE: 'Video',
  },
};
