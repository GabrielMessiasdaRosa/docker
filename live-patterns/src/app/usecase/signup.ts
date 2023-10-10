import User from "../../domain/entity/user.entity";
import UserRepository from "../repository/user.repository";

type SignupInputType = {
  name: string;
  email: string;
  password: string;
  age: number;
};
export default class Signup {
  constructor(readonly userRepository: UserRepository) {}

  async createUser(input: SignupInputType): Promise<void> {
    
    const user = new User(input.name, input.email, input.password, input.age);

    this.userRepository.save(user);
  }
}
