import React, { useRef, useEffect } from "react";
import Lottie from "lottie-react";

// Web player expects `animationData` (parsed JSON), and uses `autoplay`
export default function LottieWeb({
  source,
  autoPlay = true,
  loop = true,
  speed = 1,
  onAnimationFinish,
  style,
}) {
  const lottieRef = useRef(null);

  // set playback speed on mount/update
  useEffect(() => {
    if (lottieRef.current && typeof lottieRef.current.setSpeed === "function") {
      lottieRef.current.setSpeed(speed);
    }
  }, [speed]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={source}
      loop={loop}
      autoplay={autoPlay}
      onComplete={onAnimationFinish}
      style={style}
    />
  );
}
