"use client";

import { useState, useCallback, useEffect } from "react";
import chroma from "chroma-js";
import { Button, cn, useCanvas } from "@client/shared";
import { WaterColorPaint } from "@client/entities";

export default function CanvasExample() {
  const [drawingObjects, setDrawingObjects] = useState<WaterColorPaint[]>([]);
  const [drawingObjects2, setDrawingObjects2] = useState<WaterColorPaint[]>([]);
  const [finishedDrawing, setFinishedDrawing] = useState(false);
  const [finishedDrawing2, setFinishedDrawing2] = useState(false);

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

  const {
    canvasRef: canvasRef2,
    width: width2,
    height: height2,
  } = useCanvas({
    backgroundColor: "#ffffff",

    onAnimationFrame: useCallback(
      (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        // 캔버스 클리어
        ctx.clearRect(0, 0, width, height);

        // 배경색 적용
        ctx.fillStyle = "transparent";
        ctx.fillRect(0, 0, width, height);

        // 모든 저장된 객체 그리기 및 업데이트
        drawingObjects2.forEach((obj) => {
          obj.update();
          obj.draw(ctx);
        });
      },
      [drawingObjects2]
    ),
  });
  const drawNextForeground = useCallback(
    async (delay: number) => {
      if (width2 === 0 || height2 === 0) return;
      setDrawingObjects2((prev) => {
        const waterColor = new WaterColorPaint({
          x: (Math.random() * width2) / 2 + width2 / 4,
          y: (Math.random() * height2) / 2 + height2 / 4,
          size: (Math.random() * Math.min(width2, height2)) / 20,
          color: chroma.random().brighten(0.4).hex(),
          density: Math.random() * 0.1,
        });

        return [...prev, waterColor];
      });

      await new Promise((resolve) => setTimeout(resolve, delay));
      const nextDelayAdditional = Math.random() * 100;
      if (delay < 900) {
        drawNextForeground(delay + nextDelayAdditional);
      } else {
        setFinishedDrawing2(true);
      }
    },
    [width2, height2]
  );

  const drawNextBackground = useCallback(
    async (delay: number) => {
      if (width === 0 || height === 0) return;
      setDrawingObjects((prev) => {
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
      const nextDelayAdditional = Math.random() * 30;
      if (delay < 300) {
        drawNextBackground(delay + nextDelayAdditional);
      } else {
        drawNextForeground(300);
        setFinishedDrawing(true);
      }
    },
    [drawNextForeground, height, width]
  );

  useEffect(() => {
    drawNextBackground(0);
  }, [drawNextBackground]);

  function handleReset() {
    setFinishedDrawing(false);
    setFinishedDrawing2(false);
    setDrawingObjects([]);
    setDrawingObjects2([]);
    drawNextBackground(0);
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Canvas Hook with Class-based Drawing
      </h1>

      {/* 캔버스 */}
      <div className="border-gray-300 h-[500px] w-full rounded-lg overflow-hidden shadow-lg relative">
        <canvas ref={canvasRef} className="cursor-crosshair w-full h-full" />
        <div
          className={cn(
            "w-full h-full absolute top-0 left-0 backdrop-blur-sm backdrop-grayscale-100 transition-opacity ",
            {
              "opacity-0": !finishedDrawing,
              "opacity-100 duration-[4000ms]": finishedDrawing,
            }
          )}
        ></div>
        <canvas
          ref={canvasRef2}
          className="cursor-crosshair w-full h-full absolute top-0 left-0"
        />
      </div>
      <Button
        onClick={handleReset}
        disabled={!finishedDrawing2}
        className={cn("mt-4", {
          "opacity-0": !finishedDrawing2,
          "opacity-100": finishedDrawing2,
        })}
      >
        Reset
      </Button>
    </div>
  );
}
