import PropTypes from "prop-types";
import { imageUrl } from "../constant/movie";
import { useDispatch } from "react-redux";
import { getMovieId, setOpen } from "../features/movie/movieSlice";

const MovieCard = ({ movie }) => {
  const { poster_path, id } = movie || "";
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(getMovieId(id));
    dispatch(setOpen(true));
  };

  return (
    <div onClick={handleClickOpen} className="w-48 mx-2">
      <img src={`${imageUrl}${poster_path}`} alt="" />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
