
import { useEffect, useState } from "react";

const pawFrames = Object.entries(
  import.meta.glob("../assets/gif/paws/*.png", {
    eager: true,
    query: "?url",
    import: "default",
  })
)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true })
  )
  .map(([, url]) => url);

function PawAnimations() {
  const [paw, setPaw] = useState(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const pawSize = 256;
    const animationDuration = 5820;
    const fadeDuration = 1500;

    // 148 frames moeten samen ongeveer 5820 ms duren.
    const frameDuration =
      animationDuration / (pawFrames.length - 1);

    let fadeTimer;
    let hideTimer;
    let nextTimer;
    let frameTimer;

    const getRandomPosition = () => {
      const maxX = Math.max(0, window.innerWidth - pawSize);

      const topAreaHeight = window.innerHeight * 0.45;
      const maxY = Math.max(0, topAreaHeight - pawSize);

      return {
        x: Math.random() * maxX,
        y: Math.random() * maxY,
        rotation: Math.random() * 360,
      };
    };

    const showPaw = () => {
      const position = getRandomPosition();

      setIsFading(false);

      // Iedere nieuwe paw begint gegarandeerd bij frame 1.
      setFrameIndex(0);

      setPaw({
        id: `${Date.now()}-${Math.random()}`,
        ...position,
      });

      // Frames afspelen.
      frameTimer = setInterval(() => {
        setFrameIndex((currentFrame) => {
          if (currentFrame < pawFrames.length - 1) {
            return currentFrame + 1;
          }

          return currentFrame;
        });
      }, frameDuration);

      // Fade starten.
      fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, animationDuration - fadeDuration);

      // Paw verwijderen.
      hideTimer = setTimeout(() => {
        clearInterval(frameTimer);

        setPaw(null);
        setIsFading(false);
        setFrameIndex(0);

        const delay = Math.random() * 1500 + 1500;

        nextTimer = setTimeout(() => {
          showPaw();
        }, delay);
      }, animationDuration);
    };

    // Eerste paw verschijnt na een willekeurige delay van 2-4 seconden.
    const initialDelay = Math.random() * 2000 + 2000;

    nextTimer = setTimeout(() => {
      showPaw();
    }, initialDelay);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
      clearInterval(frameTimer);
    };
  }, []);

  if (!paw) {
    return null;
  }

  return (
    <div
      className={`paw-animation ${isFading ? "fade-out" : ""}`}
      style={{
        left: `${paw.x}px`,
        top: `${paw.y}px`,
        transform: `rotate(${paw.rotation}deg)`,
      }}
    >
      <img src={pawFrames[frameIndex]} alt="" />
    </div>
  );
}

export default PawAnimations;
