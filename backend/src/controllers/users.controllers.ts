import { db } from '../database';
import { ECategory, User, Report, UserActivity } from '../models/types';

export function getUsers(): User[] {
  return db.users.find();
}

export function getUserById(id: number): User {
  return db.users.find({ id })[0];
}

export function addUser(opt: Omit<User, "id">): number {
  return db.users.create(opt);
}

export function addUserActivity(opt: Omit<UserActivity, "id">): number {
  return db.userActivities.create(opt);
}