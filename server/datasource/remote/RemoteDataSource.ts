import { prisma } from "@/prisma/prisma";
import { Service } from "typedi";

@Service()
class RemoteDataSource {
  private readonly prismaClient;
  constructor() {
    this.prismaClient = prisma;
  }
  getInstance() {
    return this.prismaClient;
  }
}

export default RemoteDataSource;
