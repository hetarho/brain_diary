import { useState } from "react";

export default function EntryCard({
  entry,
  onDelete,
}: {
  entry: {
    id: string;
    content: string;
    createdAt: Date | string;
  };
  onDelete: (entryId: string) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const formatDate = (date: Date | string) => {
    const dateObj = new Date(date);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    // 오늘, 어제 표시
    if (dateObj.toDateString() === today.toDateString()) {
      return `오늘 (${dateObj.toLocaleString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
      })})`;
    } else if (dateObj.toDateString() === yesterday.toDateString()) {
      return `어제 (${dateObj.toLocaleString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
      })})`;
    } else {
      return dateObj.toLocaleString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  };

  const truncateContent = (content: string, maxLength: number = 100) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  return (
    <div className="border border-gray-600 rounded-lg p-4 hover:shadow-md transition-shadow bg-gray-800">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs bg-green-900 text-green-200 px-2 py-1 rounded">
            📝 원본 일기
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-blue-400 hover:text-blue-300"
            title={isExpanded ? "접기" : "전체 보기"}
          >
            {isExpanded ? "📄" : "📖"}
          </button>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="text-sm text-red-400 hover:text-red-300"
            title="일기 삭제"
          >
            🗑️
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-400 mb-2">
        {formatDate(entry.createdAt)}
      </div>

      <div className="text-gray-100 mb-3">
        {isExpanded ? entry.content : truncateContent(entry.content)}
      </div>

      {/* 삭제 확인 모달 */}
      {showDeleteConfirm && (
        <div className="mt-3 p-3 bg-red-900/20 border border-red-700 rounded-lg">
          <p className="text-sm text-red-300 mb-3">
            ⚠️ 이 일기를 삭제하면 연결된 엔그램과 모든 시냅스도 함께 삭제됩니다.
            정말 삭제하시겠습니까?
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => {
                onDelete(entry.id);
                setShowDeleteConfirm(false);
              }}
              className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-500"
            >
              삭제
            </button>
            <button
              onClick={() => setShowDeleteConfirm(false)}
              className="px-3 py-1 bg-gray-600 text-gray-200 text-sm rounded hover:bg-gray-500"
            >
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
