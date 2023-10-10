import User from "../entity/user.entity";
import { AbstractSpecification } from "./specification";

export default class UserPasswordSpecification extends AbstractSpecification<User> {
  isSatisfiedBy(user: User): boolean {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return !!passwordRegex.test(user.password);
  }
}
