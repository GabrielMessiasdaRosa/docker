import User from "../../src/domain/entity/user.entity";

describe("UserUnitTest", () => {
  it("should create a new user and allow login", async () => {
    const user = new User(
      "Gabriel Messias",
      "gabriel@example.com",
      "MyPassword123",
      25
    );
    expect(user.name).toBe("Gabriel Messias");
    expect(user.email).toBe("gabriel@example.com");
    expect(user.password).toBe("MyPassword123");
    expect(user.age).toBe(25);
  });

  it("Shoud not create user if name is invalid", () => {
    expect(
      () => new User("Gabriel", "gabriel@example.com", "MyPassword123", 25)
    ).toThrow(new Error("Invalid parameter"));
  });
  it("Shoud not create user if email is invalid", () => {
    expect(
      () => new User("Gabriel Messias", "gabriel@example", "MyPassword123", 25)
    ).toThrow(new Error("Invalid parameter"));
  });
  it("Shoud not create user if password is invalid", () => {
    expect(
      () => new User("Gabriel Messias", "gabriel@example.com", "321", 25)
    ).toThrow(
      new Error(
        "Invalid parameter"
      )
    );
  });
  it("Shoud not create user if age is invalid", () => {
    expect(
      () =>
        new User("Gabriel Messias", "gabriel@example.com", "MyPassword123", 16)
    ).toThrow(new Error("Invalid parameter"));
  });
});
