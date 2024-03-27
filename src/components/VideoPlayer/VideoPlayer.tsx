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
  const cloudinaryRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = window.cloudinary;
    cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloud_name: "dhroaio3h",
    });
  }, []);

  return (
    <video
      ref={videoRef}
      data-cld-public-id={dataCldPublicId}
      width={width}
      height={height}
      controls
    ></video>
  );
};
