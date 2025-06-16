export abstract class Shape {
  protected startX: number;
  protected startY: number;
  protected endX: number;
  protected endY: number;
  protected color: string;
  protected filled: boolean;
  protected lineWidth: number;

  constructor(
    startX: number,
    startY: number,
    color: string = '#000000',
    filled: boolean = false,
    lineWidth: number = 2
  ) {
    this.startX = startX;
    this.startY = startY;
    this.endX = startX;
    this.endY = startY;
    this.color = color;
    this.filled = filled;
    this.lineWidth = lineWidth;
  }

  setEndPoint(x: number, y: number) {
    this.endX = x;
    this.endY = y;
  }

  abstract draw(ctx: CanvasRenderingContext2D): void;
}

export class Line extends Shape {
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.lineCap = 'round';

    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.endX, this.endY);
    ctx.stroke();

    ctx.restore();
  }
}

export class Rectangle extends Shape {
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    
    const width = this.endX - this.startX;
    const height = this.endY - this.startY;

    if (this.filled) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.startX, this.startY, width, height);
    } else {
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.lineWidth;
      ctx.strokeRect(this.startX, this.startY, width, height);
    }

    ctx.restore();
  }
}

export class Circle extends Shape {
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    const radius = Math.sqrt(
      Math.pow(this.endX - this.startX, 2) + 
      Math.pow(this.endY - this.startY, 2)
    );

    ctx.beginPath();
    ctx.arc(this.startX, this.startY, radius, 0, Math.PI * 2);

    if (this.filled) {
      ctx.fillStyle = this.color;
      ctx.fill();
    } else {
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.lineWidth;
      ctx.stroke();
    }

    ctx.restore();
  }
} 