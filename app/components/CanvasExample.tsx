"use client";

import { useState, useCallback, useEffect } from "react";
import { useCanvas, CanvasDragInfo, CanvasPoint } from "../hooks/useCanvas";
import WaterColorPaint from "../lib/canvas/waterColorPaint/waterColorPaint";
import PencilBrush from "../lib/canvas/brushes/PencilBrush";
import { Shape, Line, Rectangle, Circle } from "../lib/canvas/shapes/Shape";

type DrawMode = "pencil" | "watercolor" | "shape";
type ShapeType = "line" | "circle" | "rect";
type DrawingObject = WaterColorPaint | PencilBrush | Shape;

export default function CanvasExample() {
  console.log("CanvasExample Rendered");
  const [mode, setMode] = useState<DrawMode>("pencil");
  const [shapeType, setShapeType] = useState<ShapeType>("line");
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(2);
  const [isDrawing, setIsDrawing] = useState(false);

  // 그리기 객체들
  const [currentPencil, setCurrentPencil] = useState<PencilBrush | null>(null);
  const [currentShape, setCurrentShape] = useState<Shape | null>(null);
  const [drawingObjects, setDrawingObjects] = useState<DrawingObject[]>([]);

  // 저장된 상태
  const [savedState, setSavedState] = useState<ImageData | null>(null);

  const { canvasRef, ctx, width, height, clear } = useCanvas({
    backgroundColor: "#ffffff",
    onMouseDown: useCallback(
      (point: CanvasPoint) => {
        setIsDrawing(true);
        if (mode === "pencil") {
          const pencil = new PencilBrush(color, brushSize);
          pencil.startPath(point.x, point.y);
          setCurrentPencil(pencil);
        } else if (mode === "watercolor") {
          const waterColor = new WaterColorPaint({
            x: point.x,
            y: point.y,
            size: brushSize * 10,
            color: color + "40", // 투명도 추가
          });
          setDrawingObjects((prev) => [...prev, waterColor]);
        } else if (mode === "shape") {
          let shape: Shape;
          switch (shapeType) {
            case "line":
              shape = new Line(point.x, point.y, color, false, brushSize);
              break;
            case "circle":
              shape = new Circle(point.x, point.y, color, false, brushSize);
              break;
            case "rect":
              shape = new Rectangle(point.x, point.y, color, false, brushSize);
              break;
          }
          setCurrentShape(shape);
        }
      },
      [mode, color, brushSize, shapeType]
    ),

    onDragMove: useCallback(
      (info: CanvasDragInfo) => {
        // 드래그 중에는 다시 그리지 않음 (성능 최적화)
        if (mode === "pencil" && currentPencil) {
          currentPencil.addPoint(info.x, info.y);
        } else if (mode === "shape" && currentShape) {
          currentShape.setEndPoint(info.x, info.y);
        }
      },
      [mode, currentPencil, currentShape]
    ),

    onMouseUp: useCallback(
      (point: CanvasPoint) => {
        setIsDrawing(false);
        if (currentPencil) {
          setDrawingObjects((prev) => [...prev, currentPencil]);
          setCurrentPencil(null);
        } else if (currentShape) {
          currentShape.setEndPoint(point.x, point.y);
          setDrawingObjects((prev) => [...prev, currentShape]);
          setCurrentShape(null);
        }
      },
      [currentPencil, currentShape]
    ),
    onAnimationFrame: useCallback(
      (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        // 캔버스 클리어
        ctx.clearRect(0, 0, width, height);

        // 배경색 적용
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);

        // 모든 저장된 객체 그리기
        drawingObjects.forEach((obj) => {
          obj.draw(ctx);
        });

        // 현재 그리고 있는 객체 그리기
        if (currentPencil) {
          currentPencil.draw(ctx);
        }
        if (currentShape) {
          currentShape.draw(ctx);
        }
      },
      [drawingObjects, currentPencil, currentShape]
    ),
  });

  // 그리기 객체가 변경될 때마다 캔버스를 다시 그리기
  useEffect(() => {
    if (!ctx) return;

    clear();

    // 모든 저장된 객체 그리기
    drawingObjects.forEach((obj) => {
      obj.draw(ctx);
    });

    // 현재 그리고 있는 객체 그리기
    if (currentPencil) {
      currentPencil.draw(ctx);
    }
    if (currentShape) {
      currentShape.draw(ctx);
    }
  }, [ctx, clear, drawingObjects, currentPencil, currentShape]);

  const handleClearCanvas = () => {
    setDrawingObjects([]);
    setCurrentPencil(null);
    setCurrentShape(null);
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
        {/* 모드 선택 */}
        <div className="flex gap-4">
          <button
            onClick={() => setMode("pencil")}
            className={`px-4 py-2 rounded ${
              mode === "pencil"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            연필
          </button>
          <button
            onClick={() => setMode("watercolor")}
            className={`px-4 py-2 rounded ${
              mode === "watercolor"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            수채화
          </button>
          <button
            onClick={() => setMode("shape")}
            className={`px-4 py-2 rounded ${
              mode === "shape"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            도형
          </button>
        </div>

        {/* 도형 타입 선택 */}
        {mode === "shape" && (
          <div className="flex gap-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="line"
                checked={shapeType === "line"}
                onChange={(e) => setShapeType(e.target.value as ShapeType)}
              />
              선
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="circle"
                checked={shapeType === "circle"}
                onChange={(e) => setShapeType(e.target.value as ShapeType)}
              />
              원
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="rect"
                checked={shapeType === "rect"}
                onChange={(e) => setShapeType(e.target.value as ShapeType)}
              />
              사각형
            </label>
          </div>
        )}

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
          {mode === "pencil" && "마우스를 드래그하여 자유롭게 그려보세요."}
          {mode === "watercolor" && "클릭하여 수채화 효과를 추가하세요."}
          {mode === "shape" && "클릭하고 드래그하여 도형을 그려보세요."}
        </p>
      </div>

      {/* 캔버스 */}
      <div className="border-2 border-gray-300 h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
        <canvas ref={canvasRef} className="cursor-crosshair w-full h-full" />
      </div>
    </div>
  );
}
