import { useEffect, useRef } from 'react';

import classes from './Canvas.module.css';

interface ICanvasProps {
  className?: string;
  drawImage?: (ctx: CanvasRenderingContext2D) => void;
  drawFrame?: (ctx: CanvasRenderingContext2D, deltaTime: number) => void;
}

const Canvas: React.FC<ICanvasProps> = (props) => {
  const { drawImage, drawFrame } = props;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    let animationFrameId: number | null;
    let prevTime = 0;

    const animate = (timestamp: DOMHighResTimeStamp) => {
      if (drawFrame && canvas && ctx) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        const deltaTime = (timestamp - prevTime) / 1000;
        const clampedDeltaTime = Math.min(deltaTime, 0.1);
        prevTime = timestamp;

        drawFrame(ctx, clampedDeltaTime);

        animationFrameId = window.requestAnimationFrame(
          (timestamp: DOMHighResTimeStamp) => animate(timestamp),
        );
      }
    };

    const illustrate = () => {
      if (drawImage && canvas && ctx) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        drawImage(ctx);
      }
    };

    illustrate();
    animationFrameId = window.requestAnimationFrame(
      (timestamp: DOMHighResTimeStamp) => animate(timestamp),
    );

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      if (ctx) ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };
  }, [drawImage, drawFrame]);

  return (
    <canvas
      className={[classes.Container, props.className].join(' ').trim()}
      ref={canvasRef}
    />
  );
};

export default Canvas;
