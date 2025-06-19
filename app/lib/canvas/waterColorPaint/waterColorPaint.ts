import chroma from "chroma-js";
import WaterColorPoint from "./watorColorPoint";

type WaterColorPaintData = {
  x: number;
  y: number;
  size: number;
  color: string;
  density: number;
};

export default class WaterColorPaint {
  x: number;
  y: number;
  size: number;
  initialSize: number;
  points: WaterColorPoint[][];
  color: string;
  private hexColor: string;
  density: number;

  constructor(data: WaterColorPaintData) {
    const { x, y, color, size, density } = data;
    this.x = x;
    this.y = y;
    this.size = size;
    this.initialSize = size;
    this.hexColor = color;
    this.density = density;
    this.color = color;

    this.points = [];
    this.generatePoints();
  }

  private getRGBAColor(hex: string, alpha: number): string {
    return chroma(hex)
      .alpha(Math.max(0, Math.min(1, alpha)))
      .hex();
  }

  private generatePoints() {
    Array.from({ length: 20 }, (_, index) => {
      this.points.push(
        this.getCircleDivisionPoints(
          this.x,
          this.y,
          this.size,
          300,
          this.color,
          1 - index / 20
        )
      );
    });
  }

  update() {
    if (this.initialSize / this.size > 0.05) {
      this.points.forEach((pointSet) => {
        pointSet.forEach((point) => {
          point.increasePointDistance(
            this.x,
            this.y,
            (Math.random() + 0.1) * (this.initialSize / this.size) ** 1.5
          );
        });
      });

      const largestPoint = this.points[0];

      const largestSize =
        largestPoint.reduce((acc, point) => {
          return (
            acc +
            Math.sqrt(
              Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2)
            )
          );
        }, 0) / largestPoint.length;

      this.size = largestSize;

      this.color = this.getRGBAColor(
        this.hexColor,
        this.initialSize / this.size
      );
    }
  }

  getCircleDivisionPoints(
    centerX: number,
    centerY: number,
    radius: number,
    divisions: number,
    color: string,
    speed: number
  ): WaterColorPoint[] {
    const points: WaterColorPoint[] = [];

    for (let i = 0; i < divisions; i++) {
      const angle = (i / divisions) * 2 * Math.PI;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      const point = new WaterColorPoint(x, y, { color, speed });
      points.push(point);
    }

    return points;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.points.length === 0) return;

    this.points.forEach((points) => {
      if (points.length < 2) return;
      ctx.save();

      ctx.fillStyle = this.color;
      ctx.beginPath();

      const firstMidX = (points[points.length - 1].x + points[0].x) / 2;
      const firstMidY = (points[points.length - 1].y + points[0].y) / 2;
      ctx.moveTo(firstMidX, firstMidY);

      for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        const p2 = points[(i + 1) % points.length];
        const midX = (p1.x + p2.x) / 2;
        const midY = (p1.y + p2.y) / 2;
        ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);
      }

      ctx.closePath();
      ctx.fill();

      ctx.restore();
    });
  }
}
