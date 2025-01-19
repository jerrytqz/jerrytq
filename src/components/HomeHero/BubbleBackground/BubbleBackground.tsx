import { TinyColor } from '@ctrl/tinycolor';

import Canvas from '../../../shared/userInterfaces/Canvas/Canvas';
import { randomInt } from '../../../shared/utility/randomInt';
import classes from './BubbleBackground.module.css';

interface IBubble {
  x: number;
  y: number;
  radius: number;
  speed: number;
  color: TinyColor;
  illustrate: (ctx: CanvasRenderingContext2D, spacing: number) => void;
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
    y: number = -1000,
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
    ctx.save();

    ctx.beginPath();
    ctx.arc(
      this.x * spacing + spacing / 2,
      this.y,
      this.radius,
      0,
      Math.PI * 2,
    );
    ctx.fillStyle = this.color.brighten(25).toRgbString();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(
      this.x * spacing + spacing / 2,
      this.y,
      this.radius * 1.6,
      0,
      Math.PI * 2,
    );
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color.brighten(30).toRgbString();
    ctx.fillStyle = this.color.setAlpha(0.44).toRgbString();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(
      this.x * spacing + spacing / 2,
      this.y,
      this.radius,
      0,
      Math.PI * 2,
    );
    ctx.shadowBlur = 50;
    ctx.fillStyle = this.color.setAlpha(1).toRgbString();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(
      this.x * spacing + spacing / 2,
      this.y,
      this.radius,
      0,
      Math.PI * 2,
    );
    ctx.shadowBlur = 100;
    ctx.fill();

    ctx.restore();
  }

  animate(ctx: CanvasRenderingContext2D, spacing: number, deltaTime: number) {
    this.y -= this.speed * deltaTime;
    this.radius += (1 + this.speed / 100) * deltaTime;

    this.illustrate(ctx, spacing);

    if (this.y + this.radius + 100 < 0) {
      this.radius = randomInt(2, 4);
      this.y = ctx.canvas.height + this.radius + randomInt(10, 50);
      this.speed = randomInt(100, 300);
      this.color = new TinyColor({
        r: randomInt(64, 255),
        g: randomInt(64, 255),
        b: randomInt(64, 255),
      });
    }
  }
}

const bubbles: IBubble[] = [];

for (let i = 0; i < 16; ++i) {
  bubbles.push(new Bubble(i));
}

const drawFrame = (ctx: CanvasRenderingContext2D, deltaTime: number) => {
  let end = bubbles.length;

  if (ctx.canvas.width < 768) {
    end = Math.floor(bubbles.length / 3);
  }

  const slicedBubbles = bubbles.slice(0, end);

  slicedBubbles.forEach((bubble: IBubble) => {
    bubble.animate(ctx, ctx.canvas.width / slicedBubbles.length, deltaTime);
  });
};

const BubbleBackground: React.FC = () => {
  return <Canvas className={classes.Container} drawFrame={drawFrame} />;
};

export default BubbleBackground;
