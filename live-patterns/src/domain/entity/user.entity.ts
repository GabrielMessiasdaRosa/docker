import UserAgeSpecification from "../specification/user-age.specification";
import UserEmailSpecification from "../specification/user-email.specification";
import UserNameSpecification from "../specification/user-name.specification";
import UserPasswordSpecification from "../specification/user-password.specification";

export default class User {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly age: number
  ) {
    const nameSpecification = new UserNameSpecification();
    const emailSpecification = new UserEmailSpecification();
    const passwordSpecification = new UserPasswordSpecification();
    const ageSpecification = new UserAgeSpecification();

    if (
      !nameSpecification
        .and(emailSpecification)
        .and(passwordSpecification)
        .and(ageSpecification)
        .isSatisfiedBy(this)
    ) {
      throw new Error("Invalid parameter");
    }
  }
}
