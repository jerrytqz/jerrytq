import { useEffect, useRef } from 'react';

interface ICanvasProps {
  className?: string;
  draw: (ctx: CanvasRenderingContext2D, time?: number) => void;
  isAnimated?: boolean;
}

const Canvas: React.FC<ICanvasProps> = (props) => {
  const { draw, isAnimated } = props;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    let animationFrameId: number | null;
    let time = 0;

    const animate = () => {
      if (canvas && ctx) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        draw(ctx, time++);
        animationFrameId = window.requestAnimationFrame(animate);
      }
    };

    const illustrate = () => {
      if (canvas && ctx) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        draw(ctx);
      }
    };

    if (isAnimated) {
      animate();
    } else {
      illustrate();
    }

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [draw, isAnimated]);

  return <canvas className={props.className} ref={canvasRef} />;
};

export default Canvas;
