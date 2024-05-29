import { ECategory, Report, TotalScoreReport } from '../models/types';
import { db } from '../database';

export function getReport(text: string = ""): Report {
  const usersReport: Report = {};

  console.log(db.userActivities.find())

  db.userActivities.find().forEach(({ id, userId, activityId }) => {
    console.log("id: ", id)
    if (!usersReport[userId]) {
      const user = db.users.find({ id: userId })[0];
      
      usersReport[userId] = {
        userName: "",
        totalScore: 0,
        activities: {
          [ECategory.sale]: 0,
          [ECategory.meeting]: 0,
          [ECategory.valuation]: 0,
        },
      };

      usersReport[userId].userName = user.name;
    }

    if (text && !usersReport[userId].userName.toLowerCase().includes(text.toLowerCase())) {
      return;
    }

    const activity = db.activities.find({ id: activityId })[0];

    usersReport[userId].totalScore += activity.points;
    usersReport[userId].activities[activity.name] += activity.points;
  });

  return usersReport;
}
