import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import MainContainer from "./containers/MainContainer";
import MovieContainer from "./containers/MovieContainer";
import { useEffect, useState } from "react";
import {
  fetchNowPlayingMovieAsync,
  fetchPopularMovieAsync,
  fetchTopRatedMovieAsync,
  fetchUpcomingMovieAsync,
} from "../features/movie/movieSlice";
import SearchMovie from "./SearchMovie";

const Browse = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const {
    toggle,
    isNowLoading,
    isPopularLoading,
    isUpcomingLoading,
    isTopLoading,
  } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchNowPlayingMovieAsync());
    dispatch(fetchPopularMovieAsync());
    dispatch(fetchUpcomingMovieAsync());
    dispatch(fetchTopRatedMovieAsync());
  }, [dispatch]);

  useEffect(() => {
    if (
      !isNowLoading &&
      !isPopularLoading &&
      !isUpcomingLoading &&
      !isTopLoading
    ) {
      setTimeout(() => {
        setShow(true);
      }, 1000);
    }
  }, [isNowLoading, isPopularLoading, isTopLoading, isUpcomingLoading]);

  return (
    <div className="relative">
      <Header />
      <div>
        {toggle ? (
          <SearchMovie />
        ) : (
          show && (
            <>
              <MainContainer />
              <MovieContainer />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Browse;
