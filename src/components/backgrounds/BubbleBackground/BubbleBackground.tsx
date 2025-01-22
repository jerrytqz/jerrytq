import { TinyColor } from '@ctrl/tinycolor';

import Canvas from '../../../shared/userInterfaces/Canvas/Canvas';
import { randomInt } from '../../../shared/utils/randomInt';

interface IBubble {
  x: number;
  y: number;
  radius: number;
  speed: number;
  color: TinyColor;
  reset: (ctx: CanvasRenderingContext2D) => void;
  draw: (ctx: CanvasRenderingContext2D, spacing: number) => void;
  update: (ctx: CanvasRenderingContext2D, deltaTime: number) => void;
}

class Bubble implements IBubble {
  x: number;
  y: number;
  radius: number;
  speed: number;
  color: TinyColor;

  constructor(
    x: number,
    y: number = 0,
    radius: number = 0,
    speed: number = 0,
    color: TinyColor = new TinyColor('white'),
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.color = color;
  }

  reset(ctx: CanvasRenderingContext2D) {
    this.y = ctx.canvas.height + this.radius + randomInt(10, 50);
    this.radius = randomInt(2, 4);
    this.speed = randomInt(90, 300);
    this.color = new TinyColor({
      r: randomInt(64, 255),
      g: randomInt(64, 255),
      b: randomInt(64, 255),
    });
  }

  draw(ctx: CanvasRenderingContext2D, spacing: number) {
    const x = this.x * spacing + spacing / 2;

    ctx.save();

    ctx.beginPath();
    ctx.arc(x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color.brighten(25).toRgbString();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x, this.y, this.radius * 1.6, 0, Math.PI * 2);
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color.brighten(30).toRgbString();
    ctx.fillStyle = this.color.setAlpha(0.44).toRgbString();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x, this.y, this.radius, 0, Math.PI * 2);
    ctx.shadowBlur = 50;
    ctx.fillStyle = this.color.setAlpha(1).toRgbString();
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x, this.y, this.radius, 0, Math.PI * 2);
    ctx.shadowBlur = 100;
    ctx.fill();
    ctx.closePath();

    ctx.restore();
  }

  update(ctx: CanvasRenderingContext2D, deltaTime: number) {
    this.y -= this.speed * deltaTime;
    this.radius += (1 + this.speed / 100) * deltaTime;
    if (this.y + this.radius + 100 < 0) {
      this.reset(ctx);
    }
  }
}

const BUBBLES: IBubble[] = [];
for (let i = 0; i < 30; ++i) {
  BUBBLES.push(new Bubble(i));
}

let initialized = false;

const drawFrame = (ctx: CanvasRenderingContext2D, deltaTime: number) => {
  const width = ctx.canvas.width;

  let end = BUBBLES.length;
  if (width < 1200) {
    end = Math.floor(BUBBLES.length / 2);
  }
  if (width < 768) {
    end = Math.floor(BUBBLES.length / 3);
  }

  const slicedBubbles = BUBBLES.slice(0, end);
  const spacing = width / slicedBubbles.length;

  if (!initialized) {
    BUBBLES.forEach((bubble: IBubble) => {
      bubble.reset(ctx);
    });
    slicedBubbles.forEach((bubble: IBubble) => {
      bubble.update(ctx, deltaTime + randomInt(2, 27) / 10);
      bubble.draw(ctx, spacing);
    });
    initialized = true;
  } else {
    slicedBubbles.forEach((bubble: IBubble) => {
      bubble.update(ctx, deltaTime);
      bubble.draw(ctx, spacing);
    });
  }
};

interface IBubbleBackgroundProps {
  className?: string;
}

const BubbleBackground: React.FC<IBubbleBackgroundProps> = (props) => {
  return <Canvas className={props.className} drawFrame={drawFrame} />;
};

export default BubbleBackground;
