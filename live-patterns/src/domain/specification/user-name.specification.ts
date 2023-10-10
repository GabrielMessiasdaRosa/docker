import User from "../entity/user.entity";
import { AbstractSpecification } from "./specification";

export default class UserNameSpecification extends AbstractSpecification<User> {
  isSatisfiedBy(user: User): boolean {
    return user.name.split(" ").length >= 2;
  }
}
