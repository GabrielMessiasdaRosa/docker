export default class User {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly age: number
  ) {
    if (name.split(" ").length < 2) {
      throw new Error("Invalid name");
    }
    if (
      !String(email)
        .toLowerCase()
        .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      throw new Error("Invalid email format");
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const testPassword = !passwordRegex.test(String(password));
    if (testPassword) {
      throw new Error(
        "Password must contain at last one letter, one number and min of 8 characters."
      );
    }
    if (age < 18) {
      {
        throw new Error("Only for +18");
      }
    }
  }
}
