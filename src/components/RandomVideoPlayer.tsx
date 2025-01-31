import { useEffect, useRef, useState } from "react";

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4"
  // Добавьте сюда пути к вашим видеофайлам
];

const RandomVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const playRandomVideo = () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setCurrentVideoIndex(randomIndex);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentVideoIndex]);

  const handleVideoEnd = () => {
    playRandomVideo();
  };

  return (
    <video
      ref={videoRef}
      className="w-screen h-screen object-cover"
      src={videos[currentVideoIndex]}
      autoPlay
      muted
      onEnded={handleVideoEnd}
    />
  );
};

export default RandomVideoPlayer;