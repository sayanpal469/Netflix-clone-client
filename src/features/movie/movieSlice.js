import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchMovieById,
  fetchNowPlayingMovie,
  fetchPopularMovie,
  fetchTopRatedMovie,
  fetchUpcomingMovie,
  fetchSearchMovies,
} from "./movieApi";

const initialState = {
  nowPlayMovie: null,
  popularMovie: null,
  upcomingMovie: null,
  topMovie: null,
  trailerMovie: null,
  searchMovies: null,
  searchMovieName: null,
  isSuccess: false,
  isNowLoading: false,
  isPopularLoading: false,
  isUpcomingLoading: false,
  isTopLoading: false,
  isTrailerLoading: false,
  isSearchLoading: false,
  isError: false,
  error: null,
  toggle: false,
  open: false,
  movieInfo: null,
  mute: 0,
};

export const fetchNowPlayingMovieAsync = createAsyncThunk(
  "movie/fetchNowPlayingMovie",
  async () => {
    const response = await fetchNowPlayingMovie();
    return response.results;
  }
);

export const fetchPopularMovieAsync = createAsyncThunk(
  "movie/fetchPopularMovie",
  async () => {
    const response = await fetchPopularMovie();
    return response.results;
  }
);

export const fetchUpcomingMovieAsync = createAsyncThunk(
  "movie/fetchUpcomingMovie",
  async () => {
    const response = await fetchUpcomingMovie();
    return response.results;
  }
);

export const fetchTopRatedMovieAsync = createAsyncThunk(
  "movie/fetchTopRatedMovie",
  async () => {
    const response = await fetchTopRatedMovie();
    return response.results;
  }
);

export const fetchMovieByIdAsync = createAsyncThunk(
  "movie/fetchMovieById",
  async (id) => {
    const response = await fetchMovieById(id);
    return response.results;
  }
);

export const fetchSearchMoviesAsync = createAsyncThunk(
  "movie/fetchSearchMovies",
  async (value) => {
    const response = await fetchSearchMovies(value);
    return response.results;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    getMovieInfo: (state, action) => {
      state.movieInfo = action.payload;
    },
    setMute: (state, action) => {
      state.mute = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNowPlayingMovieAsync.pending, (state) => {
        state.isNowLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchNowPlayingMovieAsync.fulfilled, (state, action) => {
        state.isNowLoading = false;
        state.isError = false;
        // console.log(action);
        state.isSuccess = true;
        state.nowPlayMovie = action.payload;
      })
      .addCase(fetchNowPlayingMovieAsync.rejected, (state, action) => {
        state.isNowLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.error.message;
        state.nowPlayMovie = null;
      })
      .addCase(fetchPopularMovieAsync.pending, (state) => {
        state.isPopularLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchPopularMovieAsync.fulfilled, (state, action) => {
        state.isPopularLoading = false;
        state.isError = false;
        // console.log(action);
        state.isSuccess = true;
        state.popularMovie = action.payload;
      })
      .addCase(fetchPopularMovieAsync.rejected, (state, action) => {
        state.isPopularLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.error.message;
        state.popularMovie = null;
      })
      .addCase(fetchUpcomingMovieAsync.pending, (state) => {
        state.isUpcomingLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchUpcomingMovieAsync.fulfilled, (state, action) => {
        state.isUpcomingLoading = false;
        state.isError = false;
        // console.log(action);
        state.isSuccess = true;
        state.upcomingMovie = action.payload;
      })
      .addCase(fetchUpcomingMovieAsync.rejected, (state, action) => {
        state.isUpcomingLoading = false;
        state.isSuccess = false;
        state.isError = true;
        // console.log(action);
        state.error = action.error.message;
        state.upcomingMovie = null;
      })
      .addCase(fetchTopRatedMovieAsync.pending, (state) => {
        state.isTopLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchTopRatedMovieAsync.fulfilled, (state, action) => {
        state.isTopLoading = false;
        state.isError = false;
        // console.log(action);
        state.isSuccess = true;
        state.topMovie = action.payload;
      })
      .addCase(fetchTopRatedMovieAsync.rejected, (state, action) => {
        state.isTopLoading = false;
        state.isSuccess = false;
        state.isError = true;
        // console.log(action);
        state.error = action.error.message;
        state.topMovie = null;
      })
      .addCase(fetchMovieByIdAsync.pending, (state) => {
        state.isTrailerLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchMovieByIdAsync.fulfilled, (state, action) => {
        state.isTrailerLoading = false;
        state.isError = false;
        // console.log(action);
        state.isSuccess = true;
        const trailer = action.payload;
        state.trailerMovie = trailer.filter((t) => t.type === "Trailer");
      })
      .addCase(fetchMovieByIdAsync.rejected, (state, action) => {
        state.isTrailerLoading = false;
        state.isSuccess = false;
        state.isError = true;
        // console.log(action);
        state.error = action.error.message;
        state.trailerMovie = null;
      })
      .addCase(fetchSearchMoviesAsync.pending, (state) => {
        state.isSearchLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchSearchMoviesAsync.fulfilled, (state, action) => {
        state.isSearchLoading = false;
        state.isError = false;
        console.log(action);
        state.isSuccess = true;
        state.searchMovieName = action.meta.arg;
        state.searchMovies = action.payload;
      })
      .addCase(fetchSearchMoviesAsync.rejected, (state, action) => {
        state.isSearchLoading = false;
        state.isSuccess = false;
        state.isError = true;
        // console.log(action);
        state.error = action.error.message;
        state.searchMovies = null;
      });
  },
});

export const { setToggle, setOpen, getMovieInfo, setMute } = movieSlice.actions;

export default movieSlice.reducer;
