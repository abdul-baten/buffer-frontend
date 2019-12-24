import { IPage } from '../../model/page/page.model';

const PAGES: IPage = {
  LANDING_PAGE: {
    ROUTE: '',
    TITLE: 'Buffer'
  },
  SIGN_IN_PAGE: {
    ROUTE: 'sign-in',
    TITLE: 'Sign In | Buffer'
  },
  SIGN_UP_PAGE: {
    ROUTE: 'sign-up',
    TITLE: 'Sign Up | Buffer'
  },
  SCHEDULE_PAGE: {
    ROUTE: 'schedule',
    TITLE: 'Schedule | Buffer'
  },
  SCHEDULE_MONTH_PAGE: {
    ROUTE: 'month',
    TITLE: 'Month | Buffer'
  },
  SCHEDULE_WEEK_PAGE: {
    ROUTE: 'week',
    TITLE: 'Week | Buffer'
  },
  SCHEDULE_DAY_PAGE: {
    ROUTE: 'day',
    TITLE: 'Day | Buffer'
  }
};

export { PAGES };
