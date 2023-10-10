import UserRepository from "../repository/user.repository";

type InputType = {
  email: string;
  password: string;
};

type OutputType = {
  name: string;
  token: string;
};

export default class Login {
  constructor(readonly userRepository: UserRepository) {}

  async execute(input: InputType): Promise<OutputType> {
    const user = await this.userRepository.getByEmail(input.email);
    if (!user) throw new Error("Authentication failed");
    if (user.password !== input.password)
      throw new Error("Authentication failed");
    return {
      name: user.name,
      token: "ey...",
    };
  }
}
