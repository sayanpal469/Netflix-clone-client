import { useSelector } from "react-redux";
import VideoBackGround from "../video/VideoBackGround";
import VideoTitle from "../video/VideoTitle";

const MainContainer = () => {

  const { nowPlayMovie } = useSelector((state) => state.movie);

  const { id, original_title, overview } = nowPlayMovie[0];

  return (
    <div className="w-full">
      <div className="w-[45%]">
        <VideoTitle title={original_title} overview={overview} />
      </div>
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;
