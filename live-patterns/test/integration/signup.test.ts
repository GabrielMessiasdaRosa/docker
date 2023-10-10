import UserRepository from "../../src/app/repository/user.repository";
import Signup from "../../src/app/usecase/signup";

describe("Signup", () => {
  it("should create a new user and allow login", async () => {
    // given
    const userRepositoryMock: jest.Mocked<UserRepository> = {
      getByEmail: jest.fn(),
      save: jest.fn(),
    };
    userRepositoryMock.getByEmail.mockResolvedValue(undefined);

    const signup = new Signup(userRepositoryMock);
    const signupInput = {
      name: "Gabriel Messias",
      email: "gabriel@example.com",
      password: "MyPassword123",
      age: 25,
    };

    // when
    await signup.createUser(signupInput);

    // then - assert
    expect(userRepositoryMock.save).toHaveBeenCalledTimes(1);
    expect(userRepositoryMock.save).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Gabriel Messias",
        email: "gabriel@example.com",
        password: expect.any(String),
        age: 25,
      })
    );
  });
});
