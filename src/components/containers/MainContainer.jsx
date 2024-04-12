import VideoBackGround from "../video/VideoBackGround";
import VideoTitle from "../video/VideoTitle";

const MainContainer = () => {
  return (
    <div className="w-full">
      <div className="w-[45%]">
        <VideoTitle />
      </div>
      <VideoBackGround />
    </div>
  );
};

export default MainContainer;
