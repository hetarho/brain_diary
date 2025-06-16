export default class PencilBrush {
  private path: { x: number; y: number }[] = [];
  private color: string;
  private lineWidth: number;

  constructor(color: string = '#000000', lineWidth: number = 2) {
    this.color = color;
    this.lineWidth = lineWidth;
  }

  startPath(x: number, y: number) {
    this.path = [{ x, y }];
  }

  addPoint(x: number, y: number) {
    this.path.push({ x, y });
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (this.path.length < 2) return;

    ctx.save();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(this.path[0].x, this.path[0].y);

    for (let i = 1; i < this.path.length; i++) {
      ctx.lineTo(this.path[i].x, this.path[i].y);
    }

    ctx.stroke();
    ctx.restore();
  }

  clear() {
    this.path = [];
  }

  setColor(color: string) {
    this.color = color;
  }

  setLineWidth(lineWidth: number) {
    this.lineWidth = lineWidth;
  }
} 