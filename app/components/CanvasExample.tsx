"use client";

import { useState, useCallback } from "react";
import { useCanvas, CanvasPoint } from "../hooks/useCanvas";
import WaterColorPaint from "../lib/canvas/waterColorPaint/waterColorPaint";

export default function CanvasExample() {
  console.log("CanvasExample Rendered");
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(2);
  const [density, setDensity] = useState(10);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawingObjects, setDrawingObjects] = useState<WaterColorPaint[]>([]);

  // 저장된 상태
  const [savedState, setSavedState] = useState<ImageData | null>(null);

  const { canvasRef, ctx, width, height, clear } = useCanvas({
    backgroundColor: "#ffffff",
    onMouseDown: useCallback(
      (point: CanvasPoint) => {
        setIsDrawing(true);

        const waterColor = new WaterColorPaint({
          x: point.x,
          y: point.y,
          size: brushSize,
          color: color,
          density: density,
        });
        setDrawingObjects((prev) => [...prev, waterColor]);
      },
      [color, brushSize, density]
    ),

    onAnimationFrame: useCallback(
      (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        // 캔버스 클리어
        ctx.clearRect(0, 0, width, height);

        // 배경색 적용
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);

        // 모든 저장된 객체 그리기 및 업데이트
        drawingObjects.forEach((obj) => {
          obj.update();
          obj.draw(ctx);
        });
      },
      [drawingObjects]
    ),
  });

  const handleClearCanvas = () => {
    setDrawingObjects([]);
    clear();
  };

  const handleSave = () => {
    if (ctx && canvasRef.current) {
      const imageData = ctx.getImageData(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      setSavedState(imageData);
      alert("캔버스 상태가 저장되었습니다!");
    }
  };

  const handleRestore = () => {
    if (savedState && ctx) {
      ctx.putImageData(savedState, 0, 0);
      setDrawingObjects([]); // 객체 목록 초기화
      alert("캔버스 상태가 복원되었습니다!");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Canvas Hook with Class-based Drawing
      </h1>

      {/* 컨트롤 패널 */}
      <div className="mb-4 space-y-4">
        {/* 색상 및 크기 선택 */}
        <div className="flex gap-4 items-center">
          <label className="flex items-center gap-2">
            색상:
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-10 h-10 border rounded"
            />
          </label>
          <label className="flex items-center gap-2">
            크기:
            <input
              type="range"
              min="1"
              max="20"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-32"
            />
            <span className="w-10 text-sm">{brushSize}</span>
          </label>
          <label className="flex items-center gap-2">
            농도:
            <input
              type="range"
              min="1"
              max="20"
              value={density}
              onChange={(e) => setDensity(Number(e.target.value))}
              className="w-32"
            />
            <span className="w-10 text-sm">{density}</span>
          </label>
        </div>

        {/* 상태 정보 */}
        <div className="flex gap-4 items-center text-sm text-gray-600">
          <p>
            캔버스 크기: {width} x {height}
          </p>
          <p>{isDrawing ? "그리는 중..." : "대기 중"}</p>
          <p>객체 수: {drawingObjects.length}</p>
        </div>

        {/* 액션 버튼 */}
        <div className="flex gap-2">
          <button
            onClick={handleClearCanvas}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            모두 지우기
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            상태 저장
          </button>
          <button
            onClick={handleRestore}
            disabled={!savedState}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50"
          >
            상태 복원
          </button>
        </div>
      </div>

      {/* 사용법 안내 */}
      <div className="mb-4 p-4 bg-blue-50 rounded">
        <p className="text-sm text-blue-800">
          마우스를 드래그하여 자유롭게 그려보세요.
        </p>
      </div>

      {/* 캔버스 */}
      <div className="border-2 border-gray-300 h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
        <canvas ref={canvasRef} className="cursor-crosshair w-full h-full" />
      </div>
    </div>
  );
}
