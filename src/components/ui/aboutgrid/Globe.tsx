import createGlobe from "cobe";
import { useEffect, useRef } from "react";

const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const isMobile = window.innerWidth <= 768;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: isMobile ? 1 : 2,
      width: isMobile ? 300 * 2 : 600 * 2,
      height: isMobile ? 300 * 2 : 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: isMobile ? 8000 : 16000,
      mapBrightness: isMobile ? 4 : 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size:  0.03 },
        { location: [40.7128, -74.006], size:  0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        className={className}
      />
    </>
  );
};

export default Globe;
