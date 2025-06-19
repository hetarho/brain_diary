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
  points: WaterColorPoint[][];
  color: string;
  private hexColor: string;
  density: number;

  private readonly DENSITY_THRESHOLD = 1;
  private readonly SIZE_GROWTH_RATE = 0.02;
  private readonly DENSITY_DECAY_RATE = 0.005;

  constructor(data: WaterColorPaintData) {
    const { x, y, color, size, density } = data;
    this.x = x;
    this.y = y;
    this.size = size;
    this.hexColor = color;
    this.density = density;
    this.color = this.getRGBAColor(this.hexColor, this.density / 15);

    this.points = [];
    this.generatePoints();
  }

  private getRGBAColor(hex: string, alpha: number): string {
    return chroma(hex)
      .alpha(Math.max(0, Math.min(1, alpha)))
      .hex();
  }

  private generatePoints() {
    Array.from({ length: this.size }, (_, index) => {
      this.points.push(
        this.getCircleDivisionPoints(this.x, this.y, index + 1, 300, this.color)
      );
    });
  }

  update() {
    if (this.density > this.DENSITY_THRESHOLD) {
      const tmpSize = this.size;
      const sizeIncrease = this.density * this.SIZE_GROWTH_RATE;
      this.size += sizeIncrease;
      this.density -= this.DENSITY_DECAY_RATE * this.density;
      this.density = Math.max(this.DENSITY_THRESHOLD, this.density);

      if (Math.floor(tmpSize) !== Math.floor(this.size)) {
        this.points.push(
          this.getCircleDivisionPoints(this.x, this.y, 1, 300, this.color)
        );
      }

      this.points.forEach((pointSet) => {
        pointSet.forEach((point) => {
          point.increasePointDistance(
            this.x,
            this.y,
            Math.random() * (this.DENSITY_DECAY_RATE * 100)
          );
        });
      });
      this.color = this.getRGBAColor(this.hexColor, this.density / 15);
    }
  }

  getCircleDivisionPoints(
    centerX: number,
    centerY: number,
    radius: number,
    divisions: number,
    color: string
  ): WaterColorPoint[] {
    const points: WaterColorPoint[] = [];

    for (let i = 0; i < divisions; i++) {
      const angle = (i / divisions) * 2 * Math.PI;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      const point = new WaterColorPoint(x, y, { color });
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
