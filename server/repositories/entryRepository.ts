import { Entry } from "@prisma/client";
import { Service } from "typedi";
import RemoteDataSource from "../datasource/remote/_remoteDataSource";

@Service()
class EntryRepository {
  constructor(private readonly remoteDataSource: RemoteDataSource) {}

  async findByUserId(userId: string): Promise<Entry[]> {
    return this.remoteDataSource
      .getInstance()
      .entry.findMany({ where: { userId } });
  }

  async create(data: { userId: string; content: string }): Promise<Entry> {
    return this.remoteDataSource.getInstance().entry.create({
      data: {
        userId: data.userId,
        content: data.content,
      },
    });
  }

  async delete(entryId: string): Promise<Entry> {
    return this.remoteDataSource.getInstance().entry.delete({
      where: { id: entryId },
    });
  }
}

export default EntryRepository;
