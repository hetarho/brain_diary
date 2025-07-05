class WaterColorPoint {
  x: number;
  y: number;
  speed: number;

  constructor(x: number, y: number, { speed }: { speed: number }) {
    this.x = x;
    this.y = y;
    this.speed = speed;
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
    const newDistance = currentDistance + additionalDistance * this.speed;

    // 거리 증가 비율 계산
    const ratio = newDistance / currentDistance;

    // 새로운 점의 좌표 계산
    this.x = centerX + dx * ratio;
    this.y = centerY + dy * ratio;
  }
}

export default WaterColorPoint;
