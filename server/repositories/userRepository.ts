import { Service } from "typedi";
import RemoteDataSource from "../datasource/remote/_remoteDataSource";
import { Prisma, User } from "@prisma/client";

@Service()
class UserRepository {
  constructor(private readonly remoteDataSource: RemoteDataSource) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.remoteDataSource.getInstance().user.findUnique({
      where: { email },
    });
  }

  async findById(userId: string): Promise<User | null> {
    return this.remoteDataSource.getInstance().user.findUnique({
      where: { id: userId },
    });
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.remoteDataSource.getInstance().user.create({ data });
  }
}

export default UserRepository;
