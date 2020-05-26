import { E_ATTRIBUTION, E_BUSINESS_TYPE, E_COMPANY_SIZE, E_SUBSCRIPTION_PLAN } from '@core/enum';

// tslint:disable-next-line
export interface I_SUBSCRIPTION {
  isTrial: boolean;
  subscriptionPlan: E_SUBSCRIPTION_PLAN;
  subscriptionPlanAdded: Date;
  subscriptionPlanEnds: Date;
  trialEnds: Date;
}

// tslint:disable-next-line
export interface I_USER {
  _id: string;
  attribution: E_ATTRIBUTION;
  businessType: E_BUSINESS_TYPE;
  companyName: string;
  companySize: E_COMPANY_SIZE;
  createdAt: Date;
  email: string;
  fullName: string;
  password: string;
  subscription: I_SUBSCRIPTION;
  updatedAt: Date;
  userSuspended: boolean;
}
