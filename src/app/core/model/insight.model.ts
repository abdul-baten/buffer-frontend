// tslint:disable-next-line
export interface I_INSIGHT {
  [key: string]: Record<string, any>;
}

// tslint:disable-next-line
export interface I_INSIGHT_PAYLOAD {
  id: string;
  dateRange: Date[];
}

// tslint:disable-next-line
export interface I_FB_INSIGHT_PAYLOAD {
  id: string;
  since: string;
  until: string;
  userID: string;
}
