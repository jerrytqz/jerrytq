import { TinyColor } from '@ctrl/tinycolor';

import Canvas from '../../../shared/userInterfaces/Canvas/Canvas';
import { randomInt } from '../../../shared/utils/randomInt';

interface IBubble {
  x: number;
  y: number;
  radius: number;
  speed: number;
  color: TinyColor;
  illustrate: (ctx: CanvasRenderingContext2D, spacing: number) => void;
  reset: (y: number, radius: number) => void;
  animate: (
    ctx: CanvasRenderingContext2D,
    spacing: number,
    deltaTime: number,
  ) => void;
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

  illustrate(ctx: CanvasRenderingContext2D, spacing: number) {
    const x = this.x * spacing + spacing / 2;

    ctx.save();

    ctx.beginPath();
    ctx.arc(x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color.brighten(25).toRgbString();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, this.y, this.radius * 1.6, 0, Math.PI * 2);
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color.brighten(30).toRgbString();
    ctx.fillStyle = this.color.setAlpha(0.44).toRgbString();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, this.y, this.radius, 0, Math.PI * 2);
    ctx.shadowBlur = 50;
    ctx.fillStyle = this.color.setAlpha(1).toRgbString();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, this.y, this.radius, 0, Math.PI * 2);
    ctx.shadowBlur = 100;
    ctx.fill();

    ctx.restore();
  }

  reset(y: number, radius: number) {
    this.y = y;
    this.radius = radius;
    this.speed = randomInt(100, 300);
    this.color = new TinyColor({
      r: randomInt(64, 255),
      g: randomInt(64, 255),
      b: randomInt(64, 255),
    });
  }

  animate(ctx: CanvasRenderingContext2D, spacing: number, deltaTime: number) {
    this.illustrate(ctx, spacing);

    this.y -= this.speed * deltaTime;
    this.radius += (1 + this.speed / 100) * deltaTime;

    if (this.y + this.radius + 100 < 0) {
      this.reset(
        ctx.canvas.height + this.radius + randomInt(10, 50),
        randomInt(2, 4),
      );
    }
  }
}

const bubbles: IBubble[] = [];
for (let i = 0; i < 16; ++i) {
  bubbles.push(new Bubble(i));
}

let initialized = false;

const drawFrame = (ctx: CanvasRenderingContext2D, deltaTime: number) => {
  let end = bubbles.length;

  if (ctx.canvas.width < 768) {
    end = Math.floor(bubbles.length / 3);
  }

  const slicedBubbles = bubbles.slice(0, end);

  if (!initialized) {
    bubbles.forEach((bubble: IBubble) => {
      bubble.reset(
        Math.floor(Math.random() * ctx.canvas.height),
        randomInt(6, 8),
      );
    });
    initialized = true;
  }

  slicedBubbles.forEach((bubble: IBubble) => {
    bubble.animate(ctx, ctx.canvas.width / slicedBubbles.length, deltaTime);
  });
};

interface IBubblesBackgroundProps {
  className?: string;
}

const BubblesBackground: React.FC<IBubblesBackgroundProps> = (props) => {
  return <Canvas className={props.className} drawFrame={drawFrame} />;
};

export default BubblesBackground;
