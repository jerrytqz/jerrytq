import { useCallback, useState } from 'react';

const ZOOM_DEFAULT = 1;
const ZOOM_ZOOMED = 2;

const clamp = (value) => {
  return Math.max(Math.min(value, 100), 0);
};

const ZoomImage = (props) => {
  const [zoomState, setZoomState] = useState(ZOOM_DEFAULT);
  const [zoomPosition, setZoomPosition] = useState(null);

  const computePosition = useCallback((event) => {
    const rectangle = event.target.getBoundingClientRect();
    const xPercent = clamp(
      ((event.clientX - rectangle.left) / event.target.clientWidth) * 100,
    ).toFixed(1);
    const yPercent = clamp(
      ((event.clientY - rectangle.top) / event.target.clientHeight) * 100,
    ).toFixed(1);
    setZoomPosition(`${xPercent}% ${yPercent}%`);
  }, []);

  const zoomHandler = useCallback(
    (event) => {
      if (zoomState === ZOOM_DEFAULT) {
        computePosition(event);
        setZoomState(ZOOM_ZOOMED);
      } else {
        setZoomState(ZOOM_DEFAULT);
      }
    },
    [computePosition, zoomState],
  );

  const mouseMoveHandler = useCallback(
    (event) => {
      if (zoomState === ZOOM_ZOOMED) {
        computePosition(event);
      }
    },
    [computePosition, zoomState],
  );

  return (
    <div
      onClick={zoomHandler}
      onMouseMove={mouseMoveHandler}
      className={props.className}
      style={{
        backgroundImage: `url(${props.imageUrl})`,
        backgroundSize: zoomState === ZOOM_DEFAULT ? 'cover' : '200%',
        backgroundPosition:
          zoomState === ZOOM_DEFAULT ? 'center' : zoomPosition,
        cursor: zoomState === ZOOM_DEFAULT ? 'zoom-in' : 'zoom-out',
      }}
      aria-label={props.imageAlt}
      role="img"
    />
  );
};

export default ZoomImage;
