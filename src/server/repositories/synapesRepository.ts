import { Service } from "typedi";
import RemoteDataSource from "../datasource/remote/remoteDataSource";
import { EmotionTag, Engram, Synapse, User } from "@prisma/client";

type SynapseWithToEngram = Synapse & {
  toEngram: Engram & { emotionTags: EmotionTag[]; user: User };
};

type SynapseWithFromEngram = Synapse & {
  fromEngram: Engram & { emotionTags: EmotionTag[]; user: User };
};

@Service()
class SynapseRepository {
  constructor(private readonly remoteDataSource: RemoteDataSource) {}

  async findByToEngramId(
    toEngramId: string,
    minStrength: number
  ): Promise<SynapseWithToEngram[]> {
    const synapses = await this.remoteDataSource
      .getInstance()
      .synapse.findMany({
        where: { toEngramId, strength: { gte: minStrength } },
        include: {
          toEngram: {
            include: {
              emotionTags: true,
              user: true,
            },
          },
        },
      });

    return synapses;
  }

  async findByFromEngramId(
    fromEngramId: string,
    minStrength: number
  ): Promise<SynapseWithFromEngram[]> {
    const synapses = (await this.remoteDataSource
      .getInstance()
      .synapse.findMany({
        where: { fromEngramId, strength: { gte: minStrength } },
        include: {
          fromEngram: {
            include: {
              emotionTags: true,
              user: true,
            },
          },
        },
      })) as (Synapse & {
      fromEngram: Engram & { emotionTags: EmotionTag[]; user: User };
    })[];

    return synapses;
  }
}

export default SynapseRepository;
