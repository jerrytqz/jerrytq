import { TinyColor } from '@ctrl/tinycolor';

import Canvas from '../../../shared/userInterfaces/Canvas/Canvas';
import { randomInt } from '../../../shared/utils/randomInt';

interface ISnowflake {
  color: TinyColor;
  x: number;
  y: number;
  size: number;
  a: number;
  xDelta: number;
  yDelta: number;
  aDelta: number;
  illustrate: (ctx: CanvasRenderingContext2D) => void;
  reset: (ctx: CanvasRenderingContext2D) => void;
  animate: (ctx: CanvasRenderingContext2D, deltaTime: number) => void;
}

class Snowflake implements ISnowflake {
  color: TinyColor;
  x: number;
  y: number;
  size: number;
  a: number;
  xDelta: number;
  yDelta: number;
  aDelta: number;

  constructor() {
    this.color = new TinyColor('white');
    this.x = 0;
    this.y = 0;
    this.size = 0;
    this.a = 0;
    this.xDelta = 0;
    this.yDelta = 0;
    this.aDelta = 0;
  }

  reset(ctx: CanvasRenderingContext2D) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    this.color = new TinyColor({
      r: 52,
      g: 235,
      b: 236,
    });
    this.x = randomInt(0, width);
    this.y = randomInt(-(height * 0.3), height);
    this.size = randomInt(10, 20) / 10;
    this.a = randomInt(-10, 10) / 10;
    this.xDelta = ((this.x - width / 2) / (width / 2) / 2) * 100;
    this.yDelta = randomInt(100, 150);
    this.aDelta = randomInt(3, 5);
  }

  illustrate(ctx: CanvasRenderingContext2D) {
    const newAlpha = this.a < 0 ? 0 : this.a > 1 ? 1 : this.a;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color.setAlpha(newAlpha).toRgbString();
    ctx.strokeStyle = this.color.setAlpha(newAlpha).toRgbString();
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  animate(ctx: CanvasRenderingContext2D, deltaTime: number) {
    this.x += this.xDelta * deltaTime;
    this.y += this.yDelta * deltaTime;
    this.a += this.aDelta * deltaTime;
    if (this.a > 2) {
      this.aDelta *= -1;
    } else if (this.a < 0 && this.aDelta < 0) {
      this.reset(ctx);
    }

    this.illustrate(ctx);
  }
}

const SNOWFLAKES: ISnowflake[] = [];
for (let i = 0; i < 500; ++i) {
  SNOWFLAKES.push(new Snowflake());
}

let initialized = false;

const drawFrame = (ctx: CanvasRenderingContext2D, deltaTime: number) => {
  if (!initialized) {
    SNOWFLAKES.forEach((snowflake: ISnowflake) => {
      snowflake.reset(ctx);
    });
    initialized = true;
  }

  for (let i = 0; i < SNOWFLAKES.length; ++i) {
    SNOWFLAKES[i].animate(ctx, deltaTime);
  }
};

interface ISnowfallBackgroundProps {
  className?: string;
}

const SnowfallBackground: React.FC<ISnowfallBackgroundProps> = (props) => {
  return <Canvas className={props.className} drawFrame={drawFrame} />;
};

export default SnowfallBackground;
