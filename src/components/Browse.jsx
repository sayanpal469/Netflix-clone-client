import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import MainContainer from "./containers/MainContainer";
import MovieContainer from "./containers/MovieContainer";
import { useEffect } from "react";
import {
  fetchNowPlayingMovieAsync,
  fetchPopularMovieAsync,
  fetchTopRatedMovieAsync,
  fetchUpcomingMovieAsync,
} from "../features/movie/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const { nowPlayMovie, popularMovie, upcomingMovie, topMovie } = useSelector((state) => state.movie);

  console.log(topMovie);

  useEffect(() => {
    dispatch(fetchNowPlayingMovieAsync());
    dispatch(fetchPopularMovieAsync());
    dispatch(fetchUpcomingMovieAsync());
    dispatch(fetchTopRatedMovieAsync());
  }, [dispatch]);

  return (
    <div className="relative">
      <Header />
      <div className="">
        <MainContainer />
        <MovieContainer />
      </div>
    </div>
  );
};

export default Browse;
