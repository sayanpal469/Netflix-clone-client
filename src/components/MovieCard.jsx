import PropTypes from "prop-types";
import { imageUrl } from "../constant/movie";
import { useDispatch } from "react-redux";
import { getMovieInfo, setOpen } from "../features/movie/movieSlice";

const MovieCard = ({ movie }) => {
  const { poster_path } = movie || "";
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(getMovieInfo(movie));
    dispatch(setOpen(true));
  };

  return (
    <div onClick={handleClickOpen} className="w-48 mx-2 cursor-pointer">
      <img src={`${imageUrl}${poster_path}`} alt="" />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
