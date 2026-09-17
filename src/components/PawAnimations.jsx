
import { useEffect, useState } from "react";
import pawGif from "../assets/gif/paws.gif";

function PawAnimations() {
  const [paw, setPaw] = useState(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const pawSize = 256;
    const animationDuration = 5820;
    const fadeDuration = 1500;

    let fadeTimer;
    let hideTimer;
    let nextTimer;

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

      setPaw({
        id: `${Date.now()}-${Math.random()}`,
        ...position,
      });

      fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, animationDuration - fadeDuration);

      hideTimer = setTimeout(() => {
        setPaw(null);
        setIsFading(false);

        const delay = Math.random() * 1500 + 1500;

        nextTimer = setTimeout(() => {
          showPaw();
        }, delay);
      }, animationDuration);
    };

    const initialDelay = Math.random() * 2000 + 2000;

    nextTimer = setTimeout(() => {
      showPaw();
    }, initialDelay);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
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
      <img src={pawGif} alt="" />
    </div>
  );
}

export default PawAnimations;




