import PropTypes from "prop-types";
import { imageUrl } from "../constant/movie";

const MovieCard = ({ movie }) => {
  const { poster_path } = movie || "";
  return (
    <div className="w-48 mx-2">
      <img src={`${imageUrl}${poster_path}`} alt="" />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
