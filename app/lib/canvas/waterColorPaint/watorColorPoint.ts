class WaterColorPoint {
  x: number;
  y: number;
  color: string;

  constructor(x: number, y: number, { color }: { color: string }) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  increasePointDistance(
    centerX: number,
    centerY: number,
    additionalDistance: number
  ) {
    // 현재 두 점 사이의 벡터 계산
    const dx = this.x - centerX;
    const dy = this.y - centerY;

    // 현재 거리 계산
    const currentDistance = Math.sqrt(dx * dx + dy * dy);

    // 새로운 거리 계산
    const newDistance = currentDistance + additionalDistance;

    // 거리 증가 비율 계산
    const ratio = newDistance / currentDistance;

    // 새로운 점의 좌표 계산
    this.x = centerX + dx * ratio;
    this.y = centerY + dy * ratio;
  }
}

export default WaterColorPoint;