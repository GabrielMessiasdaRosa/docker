import UserRepository from "../../../app/repository/user.repository";
import User from "../../../domain/entity/user.entity";

export default class UserRepositoryMemory implements UserRepository {
  users: User[];

  constructor() {
    this.users = [];
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async getByEmail(email: string): Promise<User | undefined> {
    return this.users.find((user: User) => email === user.email);
  }
}
