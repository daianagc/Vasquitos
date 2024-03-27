import { useEffect, useRef } from "react";

export const VideoPlayer = ({
  dataCldPublicId,
  width,
  height,
}: {
  dataCldPublicId: string;
  width: number;
  height: number;
}) => {
  const cloudinaryRef = useRef<any>();
  const videoRef = useRef<any>();

  useEffect(() => {
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = (window as any).cloudinary;
    if (cloudinaryRef.current)
      cloudinaryRef.current.videoPlayer(videoRef.current, {
        cloud_name: "dhroaio3h",
      });
  }, []);

  return (
    <video
      ref={videoRef}
      data-cld-public-id={dataCldPublicId}
      data-cld-colors='{ "base": "#951d1d", "accent": "#f22b29", "text": "#fff" }'
      width={width}
      height={height}
      controls
    ></video>
  );
};
