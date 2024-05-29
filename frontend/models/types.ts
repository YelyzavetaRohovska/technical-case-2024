export type User = {
  id: number;
  name: string;
  email: string;
}

export type UserActivity = {
  id: number;
  userId: number;
  activityId: number;
  timestamp: Date;
}

export enum ECategory {
  sale = 'Sale',
  meeting = 'Meeting',
  valuation = 'Valuation',
}

export type Activity = {
  id: number;
  name: ECategory;
  points: number;
}

export type Report = {
  [userId: number]: {
    totalScore: number;
    userName: string;
    activities: {
      [key in ECategory]: number;
    };
  };
}