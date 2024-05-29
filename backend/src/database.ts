// Dummy database

import { ECategory } from "./models/types";

const users = [{
    id: 1,
    name: 'John Doe',
    email: 'john@doe.com'
},
{
    id: 2,
    name: 'Jane Doe',
    email: 'jane@doe.com'
},
{
   id: 3,
   name: 'Alice Brown',
   email: 'alice@brown.com'
},
{
   id: 4,
   name: 'Bob Brown',
   email: 'bob@brown.com'
}];

const activities = [{
    id: 1,
    name: ECategory.sale,
    points: 10,
},
{
    id: 2,
    name: ECategory.meeting,
    points: 5,
},
{
    id: 3,
    name: ECategory.valuation,
    points: 3,
}];

const userActivities = [ {
    id: 1,
    userId: 1,
    activityId: 1,
    timestamp: new Date('2021-01-01T00:00:00'),
},
{
    id: 2,
    userId: 1,
    activityId: 2,
    timestamp: new Date('2021-01-02T00:00:00'),
},
{
    id: 3,
    userId: 2,
    activityId: 3,
    timestamp: new Date('2021-01-03T00:00:00'),
},
{
    id: 4,
    userId: 2,
    activityId: 2,
    timestamp: new Date('2021-01-04T00:00:00'),
},
{
    id: 5,
    userId: 3,
    activityId: 3,
    timestamp: new Date('2021-01-05T00:00:00'),
},
{
    id: 6,
    userId: 3,
    activityId: 2,
    timestamp: new Date('2021-01-06T00:00:00'),
},
{
    id: 7,
    userId: 4,
    activityId: 1,
    timestamp: new Date('2021-01-07T00:00:00'),
},
{
    id: 8,
    userId: 4,
    activityId: 3,
    timestamp: new Date('2021-01-08T00:00:00'),
}];

class Database<T> {
    private data: T[];

    constructor(data: T[]) {
        this.data = data;
    }

    find(query: Partial<T> = {}): T[] {
        return this.data.filter(doc => compareProperties(doc, query)) || [];
    };

    create(doc: Omit<T, "id">): number {
        return this.data.push({
            id: this.data.length + 1,
            ...doc,
        } as T);
    }
}

function compareProperties<T>(obj: T, query: Partial<T>): boolean {
    return Object.entries(query).every(([key, value]) => obj[key as keyof T] === value);
}

export const db = {
    users: new Database(users),
    activities: new Database(activities),
    userActivities: new Database(userActivities),
}

