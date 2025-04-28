import React from 'react';

import Canvas from '../../../shared/userInterfaces/Canvas/Canvas';

interface INode {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const NODE_COUNT = 70;
const MAX_SPEED = 30;
const LINK_DISTANCE = 120;

const nodes: INode[] = [];
let initialized = false;
let canvasWidth = 0;
let canvasHeight = 0;
let resizeTimeout: number | null = null;

const initNodes = (ctx: CanvasRenderingContext2D) => {
  const { width, height } = ctx.canvas;
  nodes.length = 0;
  for (let i = 0; i < NODE_COUNT; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() * 2 - 1) * MAX_SPEED,
      vy: (Math.random() * 2 - 1) * MAX_SPEED,
    });
  }
  initialized = true;
};

const drawFrame = (ctx: CanvasRenderingContext2D, deltaTime: number) => {
  const { width, height } = ctx.canvas;

  if (canvasWidth === 0 && canvasHeight === 0) {
    canvasWidth = width;
    canvasHeight = height;
    initNodes(ctx);
  } else if (width !== canvasWidth || height !== canvasHeight) {
    canvasWidth = width;
    canvasHeight = height;
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(() => {
      initNodes(ctx);
      resizeTimeout = null;
    }, 50);
  }

  if (!initialized) return;

  for (const node of nodes) {
    node.x += node.vx * deltaTime;
    node.y += node.vy * deltaTime;
    if (node.x < 0 || node.x > width) node.vx *= -1;
    if (node.y < 0 || node.y > height) node.vy *= -1;
  }

  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const ni = nodes[i];
      const nj = nodes[j];
      const dx = ni.x - nj.x;
      const dy = ni.y - nj.y;
      const dist2 = dx * dx + dy * dy;
      if (dist2 < LINK_DISTANCE * LINK_DISTANCE) {
        const dist = Math.sqrt(dist2);
        const alpha = 1 - dist / LINK_DISTANCE;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(ni.x, ni.y);
        ctx.lineTo(nj.x, nj.y);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }

  for (const node of nodes) {
    ctx.beginPath();
    ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fill();
    ctx.closePath();
  }
};

interface INetworkBackgroundProps {
  className?: string;
}

const NetworkBackground: React.FC<INetworkBackgroundProps> = ({
  className,
}) => {
  return <Canvas className={className} drawFrame={drawFrame} />;
};

export default NetworkBackground;
