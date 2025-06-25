"use client";

import { useState, useCallback, useEffect } from "react";
import { useCanvas } from "../hooks/useCanvas";
import WaterColorPaint from "../lib/canvas/waterColorPaint/waterColorPaint";
import chroma from "chroma-js";

export default function CanvasExample() {
  const [drawingObjects, setDrawingObjects] = useState<WaterColorPaint[]>([]);

  const { canvasRef, width, height } = useCanvas({
    backgroundColor: "#ffffff",

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

  const drawNext = useCallback(
    async (delay: number) => {
      if (width === 0 || height === 0) return;
      setDrawingObjects((prev) => {
        if (prev.length > 30) {
          return prev;
        }

        const waterColor = new WaterColorPaint({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 25 + 5,
          color: chroma.random().brighten(0.3).hex(),
          density: Math.random() * 0.2,
        });

        return [...prev, waterColor];
      });

      await new Promise((resolve) => setTimeout(resolve, delay));
      const nextDelayAdditional = Math.random() * 150;
      if (delay < 1200) {
        drawNext(delay + nextDelayAdditional);
      }
    },
    [height, width]
  );

  useEffect(() => {
    drawNext(0);
  }, [drawNext]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Canvas Hook with Class-based Drawing
      </h1>

      {/* 캔버스 */}
      <div className="border-gray-300 h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
        <canvas ref={canvasRef} className="cursor-crosshair w-full h-full" />
      </div>
    </div>
  );
}
