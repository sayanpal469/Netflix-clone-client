const VideoBackGround = () => {
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/zclkROvBRxE?si=jNLQWECxKFRE_F-5&autoplay=1&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
