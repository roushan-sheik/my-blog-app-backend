import { faker } from "@faker-js/faker";
import User from "./models/User.js";

export const seedUser = (noUsers = 5) => {
  for (let i = 0; i <= noUsers; i++) {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const newUser = new User(user);
    newUser.save();
  }
};
