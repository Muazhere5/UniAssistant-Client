/**
 * BackgroundVideo.jsx
 * ------------------------------------
 * Reusable background video component
 *
 * Usage:
 *   import BackgroundVideo from "../../components/background/BackgroundVideo";
 *   <BackgroundVideo />
 *
 * Video files MUST be inside:
 *   public/backgroundvideo.webm
 *   public/backgroundvideo.mp4
 */

const BackgroundVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className="fixed inset-0 w-full h-full object-cover -z-30"
    >
      <source src="/backgroundvideo.webm" type="video/webm" />
      <source src="/backgroundvideo.webm" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
