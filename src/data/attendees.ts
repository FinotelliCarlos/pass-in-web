import { faker } from "@faker-js/faker";

export const ATTENDEES_FAKE_DATA = Array.from({ length: 212 }).map(() => {
  return {
    id: faker.number.int({ min: 10000, max: 80000 }),
    name: faker.person.fullName(),
    email: faker.internet.email().toLocaleLowerCase(),
    createdAt: faker.date.recent({ days: 30 }),
    checkedInAt: faker.date.recent({ days: 7 }),
  };
});