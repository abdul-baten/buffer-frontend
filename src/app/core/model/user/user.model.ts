export enum EAttribution {
  ACQUIANTANCE = 'acquiantance',
  ADVERTISEMENT = 'advertisement',
  BLOG = 'blog',
  OTHER = 'other',
  SEARCH = 'search',
  SOCIAL_MEDIA = 'socialMedia',
}

export enum EBusinessType {
  AGENCY = 'agency',
  B2B = 'b2b',
  ONLINE_STORE = 'onlineStore',
  PERSONAL = 'personal',
  PHYSICAL_STORE = 'physicalStore',
  PUBLISHER = 'publisher',
  SAAS = 'saas',
}

export enum ECompanySize {
  LESS_THAN_FIVE = 'lessThan5',
  FIVE_TO_FIFTY = '5To50',
  FIFTY_ONE_TO_FIVE_HUNDRED = '51To500',
  MORE_THAN_FIVE_HUNDRED = 'moreThan500',
}

export enum ESubscriptionPlan {
  ADVANCED = 'advanced',
  AGENCY = 'agency',
  PROFESSIONAL = 'professional',
}

export interface ISubscription {
  isTrial: boolean;
  subscriptionPlan: ESubscriptionPlan;
  subscriptionPlanAdded: Date;
  subscriptionPlanEnds: Date;
  trialEnds: Date;
}

export interface IUser {
  attribution: EAttribution;
  businessType: EBusinessType;
  companyName: string;
  companySize: ECompanySize;
  createdAt: Date;
  email: string;
  fullName: string;
  id: string;
  password: string;
  subscription: ISubscription;
  updatedAt: Date;
  userSuspended: boolean;
}
