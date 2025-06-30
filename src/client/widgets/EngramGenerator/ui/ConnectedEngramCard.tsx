export default function ConnectedEngramCard({
  engram,
  synapse,
  onEngramClick,
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
  };
  synapse: {
    id: string;
    strength: number;
    type: string;
  };
  onEngramClick?: (engramId: string) => void;
}) {
  const getSynapseTypeColor = (type: string) => {
    switch (type) {
      case "SEMANTIC":
        return "bg-blue-100 text-blue-700";
      case "EMOTIONAL":
        return "bg-red-100 text-red-700";
      case "TEMPORAL":
        return "bg-green-100 text-green-700";
      case "ASSOCIATIVE":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getSynapseTypeIcon = (type: string) => {
    switch (type) {
      case "SEMANTIC":
        return "🔗";
      case "EMOTIONAL":
        return "💭";
      case "TEMPORAL":
        return "⏰";
      case "ASSOCIATIVE":
        return "🌟";
      default:
        return "🔗";
    }
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

  return (
    <div
      className="border border-purple-200 rounded-lg p-3 hover:shadow-md transition-all cursor-pointer bg-white/70"
      onClick={() => onEngramClick?.(engram.id)}
      style={{ opacity: 0.7 + synapse.strength * 0.3 }} // 연결 강도에 따라 투명도 조절
    >
      <div className="flex justify-between items-start mb-2">
        <div className="flex gap-2">
          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
            {engram.category}
          </span>
          <span
            className={`text-xs px-2 py-1 rounded ${getSynapseTypeColor(
              synapse.type
            )}`}
          >
            {getSynapseTypeIcon(synapse.type)} {synapse.type}
          </span>
        </div>
        <div className="text-xs text-purple-600 font-medium">
          연결강도: {(synapse.strength * 100).toFixed(0)}%
        </div>
      </div>

      <p className="text-gray-100 mb-2 text-sm">{engram.content}</p>

      {/* 감정 태그 미니 표시 */}
      {engram.emotionTags && engram.emotionTags.length > 0 && (
        <div className="mb-2">
          <div className="flex gap-1">
            {engram.emotionTags.slice(0, 3).map((tag, index) => {
              const emotionInfo = getEmotionInfo(tag.emotion);
              return (
                <span
                  key={index}
                  className="text-lg"
                  title={`${tag.emotion}: ${(tag.intensity * 100).toFixed(0)}%`}
                >
                  {emotionInfo.emoji}
                </span>
              );
            })}
            {engram.emotionTags.length > 3 && (
              <span className="text-xs text-gray-400">
                +{engram.emotionTags.length - 3}
              </span>
            )}
          </div>
        </div>
      )}

      <div className="flex gap-3 text-xs text-gray-400">
        <span>⭐ {engram.importance.toFixed(1)}</span>
        <span>💪 {engram.currentStrength.toFixed(1)}</span>
      </div>
    </div>
  );
}
