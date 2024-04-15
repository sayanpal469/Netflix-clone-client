import { useSelector } from "react-redux";
import MovieList from "../MovieList";

const MovieContainer = () => {
  const { nowPlayMovie, popularMovie, upcomingMovie, topMovie } = useSelector(
    (state) => state.movie
  );

  return (
    <div className="px-5">
      <div className="lg:-mt-52 mt-10 relative z-10">
        <MovieList movies={popularMovie} title="Popular Movies" />
        <MovieList movies={nowPlayMovie} title="NowPlaying Movies" />
        <MovieList movies={topMovie} title="Top Related Movies" />
        <MovieList movies={upcomingMovie} title="Upcoming Movies" />
      </div>
    </div>
  );
};

export default MovieContainer;
