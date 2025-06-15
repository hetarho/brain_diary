import WaterColorPoint from "./watorColorPoint";

type WaterColorPaintData = {
  x: number;
  y: number;
  size: number;
  color: string;
};

export default class WaterColorPaint {
  x: number;
  y: number;
  size: number;
  points: WaterColorPoint[][];
  color: string;

  constructor(data: WaterColorPaintData) {
    const { x, y, color, size } = data;
    this.x = x;
    this.y = y;
    this.size = size;

    const paintNum = Math.floor(this.size / 2);

    this.points = Array.from({ length: paintNum }, (_, index) => {
      return this.getCircleDivisionPoints(
        x,
        y,
        size * Math.pow(1.1, index + 1),
        200,
        color
      );
    });

    this.color = color;
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
      points.push(new WaterColorPoint(x, y, { color }));
    }

    return points;
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.points.length === 0) return;
    
    this.points.forEach((points) => {
      ctx.save(); // 각 점 세트마다 컨텍스트 상태 저장
      
      // 곡선 연결을 위해 이전 점과 중간 제어점 계산
      let prevPoint = points[0];
      prevPoint.increasePointDistance(this.x, this.y, Math.random() * 10);

      ctx.beginPath(); // 새로운 경로 시작
      ctx.moveTo(prevPoint.x, prevPoint.y);
      for (let i = 1; i < points.length; i++) {
        const point = points[i];
        point.increasePointDistance(this.x, this.y, Math.random() * 10);
        // 제어점: 이전 점과 현재 점의 중간값
        const cpX = (prevPoint.x + point.x) / 2;
        const cpY = (prevPoint.y + point.y) / 2;
        ctx.quadraticCurveTo(cpX, cpY, point.x, point.y);
        prevPoint = point;
      }

      // 마지막 점에서 첫 점으로 곡선 연결
      const firstPoint = points[0];
      const cpX = (prevPoint.x + firstPoint.x) / 2;
      const cpY = (prevPoint.y + firstPoint.y) / 2;
      ctx.quadraticCurveTo(cpX, cpY, firstPoint.x, firstPoint.y);
      ctx.closePath();

      // 내부 채우기
      ctx.fillStyle = this.color;
      ctx.fill();
      
      ctx.restore(); // 컨텍스트 상태 복원
    });
  }
}
