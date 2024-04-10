import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";

const VideoTitle = () => {
  return (
    <div className="absolute w-screen aspect-video text-white pt-[18%] p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
        <div>
          <h1 className="lg:text-7xl text-2xl font-bold">Netflix videos</h1>
          <p className="lg:text-xl text-xs w-[70%] lg:w-full mt-2 lg:mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit.
          </p>
          <div className="flex gap-5 mt-5">
            <button className="bg-white px-5 lg:px-10 py-1 flex items-center gap-2 lg:py-4 text-sm lg:text-xl text-black font-semibold">
                <FaPlay className="text-2xl"/>
              Play
            </button>
            <button className="bg-gray-500 px-5 lg:px-10 py-1 flex items-center gap-2 lg:py-4 text-sm lg:text-xl text-black font-semiboldF">
                <BsFillInfoCircleFill  className="text-3xl"/>
              Watch more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
