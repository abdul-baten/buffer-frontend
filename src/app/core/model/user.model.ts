import { E_SUBSCRIPTION_PLAN } from '../enum';

// tslint:disable-next-line
export interface I_SUBSCRIPTION {
  isTrial?: boolean;
  subscriptionPlan?: E_SUBSCRIPTION_PLAN;
  subscriptionPlanAdded?: Date;
  subscriptionPlanEnds?: Date;
  trialEnds?: Date;
}

// tslint:disable-next-line
export interface I_USER {
  id: string;
  createdAt: Date;
  email: string;
  fullName: string;
  password: string;
  subscription: I_SUBSCRIPTION;
  updatedAt: Date;
  userSuspended: boolean;
}
