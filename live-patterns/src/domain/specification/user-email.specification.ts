import User from "../entity/user.entity";
import { AbstractSpecification } from "./specification";

export default class UserEmailSpecification extends AbstractSpecification<User> {
  isSatisfiedBy(user: User): boolean {
    return !!String(user.email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  }
}
