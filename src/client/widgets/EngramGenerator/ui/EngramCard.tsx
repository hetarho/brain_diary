import { trpc } from "@server/trpc/client";

export default function EngramCard({
  engram,
  onEngramClick,
  isSelected,
}: {
  engram: {
    id: string;
    content: string;
    category: string;
    emotionTags?: Array<{
      emotion: string;
      intensity: number;
      valence: number;
      arousal: number;
    }>;
    importance: number;
    currentStrength: number;
    rehearsalCount: number;
    lastActivatedAt?: string | Date | null;
    decayRate?: number;
    temporalMarker?: string | null;
    spatialMarker?: string | null;
    emotionalTone?: number | null;
  };
  onEngramClick?: (engramId: string) => void;
  isSelected?: boolean;
}) {
  const rehearseMutation = trpc.engram.rehearse.useMutation();
  const strengthenSynapsesMutation =
    trpc.engram.strengthenSynapses.useMutation();

  const getCategoryRarityInfo = (category: string) => {
    const rarityScores: Record<
      string,
      { score: number; label: string; color: string }
    > = {
      UNPREDICTABLE: {
        score: 0.9,
        label: "매우 희귀",
        color: "bg-red-100 text-red-700",
      },
      PROCEDURAL: {
        score: 0.8,
        label: "희귀",
        color: "bg-orange-100 text-orange-700",
      },
      SEMANTIC: {
        score: 0.7,
        label: "희귀",
        color: "bg-orange-100 text-orange-700",
      },
      EPISODIC: {
        score: 0.5,
        label: "보통",
        color: "bg-yellow-100 text-yellow-700",
      },
      SOCIAL: {
        score: 0.5,
        label: "보통",
        color: "bg-yellow-100 text-yellow-700",
      },
      CONTEXTUAL: {
        score: 0.4,
        label: "보통",
        color: "bg-yellow-100 text-yellow-700",
      },
      ASSOCIATIVE: {
        score: 0.4,
        label: "보통",
        color: "bg-yellow-100 text-yellow-700",
      },
      SPATIAL: {
        score: 0.3,
        label: "일상적",
        color: "bg-green-100 text-green-700",
      },
      EMOTIONAL: {
        score: 0.3,
        label: "일상적",
        color: "bg-green-100 text-green-700",
      },
      PERCEPTUAL: {
        score: 0.3,
        label: "일상적",
        color: "bg-green-100 text-green-700",
      },
      PREDICTABLE: {
        score: 0.2,
        label: "매우 일상적",
        color: "bg-blue-100 text-blue-700",
      },
    };
    return (
      rarityScores[category] || {
        score: 0.3,
        label: "보통",
        color: "bg-gray-100 text-gray-700",
      }
    );
  };

  const getEmotionInfo = (emotion: string) => {
    const emotionMap: Record<
      string,
      { emoji: string; color: string; bgColor: string }
    > = {
      JOY: { emoji: "😊", color: "text-yellow-700", bgColor: "bg-yellow-100" },
      SADNESS: { emoji: "😢", color: "text-blue-700", bgColor: "bg-blue-100" },
      ANGER: { emoji: "😠", color: "text-red-700", bgColor: "bg-red-100" },
      FEAR: { emoji: "😨", color: "text-purple-700", bgColor: "bg-purple-100" },
      SURPRISE: { emoji: "😮", color: "text-pink-700", bgColor: "bg-pink-100" },
      DISGUST: {
        emoji: "🤢",
        color: "text-green-700",
        bgColor: "bg-green-100",
      },
      TRUST: {
        emoji: "🤝",
        color: "text-indigo-700",
        bgColor: "bg-indigo-100",
      },
      ANTICIPATION: {
        emoji: "🤗",
        color: "text-orange-700",
        bgColor: "bg-orange-100",
      },
    };
    return (
      emotionMap[emotion] || {
        emoji: "💭",
        color: "text-gray-700",
        bgColor: "bg-gray-100",
      }
    );
  };

  const handleRehearse = () => {
    rehearseMutation.mutate({ id: engram.id });
  };

  const handleCardClick = () => {
    // 시냅스 강화 및 연결된 엔그램 표시
    strengthenSynapsesMutation.mutate({ engramId: engram.id });
    onEngramClick?.(engram.id);
  };

  // 기억 강도에 따른 테두리 색상
  const getStrengthBorderColor = (strength: number) => {
    if (strength >= 0.8) return "border-l-4 border-l-red-500";
    if (strength >= 0.6) return "border-l-4 border-l-orange-500";
    if (strength >= 0.4) return "border-l-4 border-l-yellow-500";
    if (strength >= 0.2) return "border-l-4 border-l-green-500";
    return "border-l-4 border-l-gray-300";
  };

  return (
    <div
      className={`border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer ${
        isSelected
          ? "border-purple-300 bg-purple-50 shadow-md"
          : "border-gray-200"
      } ${getStrengthBorderColor(engram.currentStrength)}`}
      onClick={handleCardClick}
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex gap-2">
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {engram.category}
          </span>
          <span
            className={`text-xs px-2 py-1 rounded ${
              getCategoryRarityInfo(engram.category).color
            }`}
          >
            {getCategoryRarityInfo(engram.category).label}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRehearse();
            }}
            className="text-sm text-blue-500 hover:text-blue-700"
            title="기억 강화 (재열람)"
          >
            🔄
          </button>
        </div>
      </div>

      <p className={`text-gray-100 mb-3 ${isSelected ? "text-gray-900" : ""}`}>
        {engram.content}
      </p>

      {/* 감정 태그 표시 */}
      {engram.emotionTags && engram.emotionTags.length > 0 && (
        <div className="mb-3">
          <div className="flex flex-wrap gap-2">
            {engram.emotionTags.map((tag, index) => {
              const emotionInfo = getEmotionInfo(tag.emotion);
              return (
                <div
                  key={index}
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${emotionInfo.bgColor} ${emotionInfo.color}`}
                  title={`강도: ${(tag.intensity * 100).toFixed(
                    0
                  )}%, 긍정도: ${(tag.valence * 100).toFixed(0)}%, 각성도: ${(
                    tag.arousal * 100
                  ).toFixed(0)}%`}
                >
                  <span className="text-base">{emotionInfo.emoji}</span>
                  <span className="font-medium">{tag.emotion}</span>
                  <div className="flex gap-1 ml-1">
                    <div className="w-8 h-1.5 bg-white/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-current opacity-70"
                        style={{ width: `${tag.intensity * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-4 text-xs text-gray-400">
          <span title="주관적 중요도 (0.0 ~ 1.0)">
            ⭐ {engram.importance.toFixed(1)}
          </span>
          <span title="현재 기억 강도 (0.0 ~ 1.0)">
            💪 {engram.currentStrength.toFixed(1)}
          </span>
          <span title="재열람 횟수">🔄 {engram.rehearsalCount}회</span>
          {engram.decayRate && (
            <span title="감쇄율">
              📉 {(engram.decayRate * 100).toFixed(0)}%/일
            </span>
          )}
        </div>

        {engram.emotionalTone && (
          <div
            className="flex items-center gap-1 text-xs text-gray-400"
            title={`감정 톤: ${engram.emotionalTone.toFixed(2)}`}
          >
            <span>{engram.emotionalTone > 0 ? "😊" : "😟"}</span>
            <div className="w-10 h-1.5 bg-gray-200 rounded-full">
              <div
                className={`h-full rounded-full ${
                  engram.emotionalTone > 0 ? "bg-green-400" : "bg-red-400"
                }`}
                style={{
                  width: `${Math.abs(engram.emotionalTone) * 100}%`,
                  marginLeft:
                    engram.emotionalTone > 0
                      ? "50%"
                      : `${50 - Math.abs(engram.emotionalTone) * 50}%`,
                }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-2 border-t border-gray-200 pt-2">
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
          {engram.temporalMarker && (
            <span title="시간적 맥락">
              <span className="font-mono">⏰</span> {engram.temporalMarker}
            </span>
          )}
          {engram.spatialMarker && (
            <span title="공간적 맥락">
              <span className="font-mono">📍</span> {engram.spatialMarker}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
