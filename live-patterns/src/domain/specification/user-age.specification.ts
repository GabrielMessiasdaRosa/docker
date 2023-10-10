import User from "../entity/user.entity";
import { AbstractSpecification } from "./specification";

export default class UserAgeSpecification extends AbstractSpecification<User> {
  isSatisfiedBy(user: User): boolean {
    return user.age > 17;
  }
}
