import { Service } from "typedi";
import RemoteDataSource from "../datasource/remote/_remoteDataSource";
import { EmotionType, Engram, MemoryType } from "@prisma/client";

@Service()
class EngramRepository {
  constructor(private readonly remoteDataSource: RemoteDataSource) {}

  async findByUserId(userId: string): Promise<Engram[]> {
    return this.remoteDataSource
      .getInstance()
      .engram.findMany({ where: { userId } });
  }

  async findByEntryId(entryId: string): Promise<Engram[]> {
    return this.remoteDataSource
      .getInstance()
      .engram.findMany({ where: { entryId } });
  }

  async findById(id: string): Promise<Engram | null> {
    return this.remoteDataSource
      .getInstance()
      .engram.findUnique({ where: { id } });
  }

  async create(data: {
    userId: string;
    content: string;
    entryId: string;
    category: MemoryType;
    emotionTags: {
      emotion: EmotionType;
      intensity: number;
      valence: number;
      arousal: number;
    }[];
  }): Promise<Engram> {
    return this.remoteDataSource.getInstance().engram.create({
      data: {
        userId: data.userId,
        content: data.content,
        emotionTags: {
          create: data.emotionTags.map((tag) => ({
            emotion: tag.emotion,
            intensity: tag.intensity,
            valence: tag.valence,
            arousal: tag.arousal,
          })),
        },
        entryId: data.entryId,
        category: data.category,
      },
    });
  }

  async rehearse(id: string): Promise<Engram> {
    return this.remoteDataSource.getInstance().engram.update({
      where: { id },
      data: { currentStrength: { increment: 1 } },
    });
  }
}

export default EngramRepository;
