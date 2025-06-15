"use client";

import { useEffect, useRef } from "react";
import WaterColorPaint from "../lib/canvas/waterColorPaint/waterColorPaint";

export default function CanvasPage() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = ref.current?.getContext("2d");

    if (!ctx) {
      return;
    }

    const paint = new WaterColorPaint({
      x: 100,
      y: 100,
      color: "#ff000040",
      size: 20,
    });

    const paint2 = new WaterColorPaint({
      x: 300,
      y: 200,
      color: "#0044ff40",
      size: 20,
    });

    const paint3 = new WaterColorPaint({
      x: 200,
      y: 300,
      color: "#00970d40",
      size: 20,
    });

    paint.draw(ctx);
    paint2.draw(ctx);
    paint3.draw(ctx);
  }, []);

  return (
    <div
      className="
  flex flex-col items-center h-screen justify-center"
    >
      <canvas
        id="canvas"
        className=" bg-white"
        width={400}
        height={400}
        ref={ref}
      ></canvas>
    </div>
  );
}
