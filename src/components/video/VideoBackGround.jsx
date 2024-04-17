import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieByIdAsync } from "../../features/movie/movieSlice";

const VideoBackGround = ({ movieId }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { trailerMovie, isTrailerLoading } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(fetchMovieByIdAsync(movieId));
  }, [dispatch, movieId]);

  useEffect(() => {
    if (!isTrailerLoading && trailerMovie && trailerMovie.length > 0) {
      setShow(true);
    }
  }, [isTrailerLoading, trailerMovie]);

  const id = trailerMovie && trailerMovie.length > 0 ? trailerMovie[0].key : "";

  return (
    <div className="w-screen z-30">
      {show && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${id}?autoplay=0&mute=0`}
          title="YouTube video player"
          allow="autoplay"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

VideoBackGround.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default VideoBackGround;
