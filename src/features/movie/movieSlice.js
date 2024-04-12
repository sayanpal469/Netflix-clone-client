import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchNowPlayingMovie,
  fetchPopularMovie,
  fetchTopRatedMovie,
  fetchUpcomingMovie,
} from "./movieApi";

const initialState = {
  nowPlayMovie: null,
  popularMovie: null,
  upcomingMovie: null,
  topMovie: null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  error: null,
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

const movieSlice = createSlice({
  name: "movie",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchNowPlayingMovieAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchNowPlayingMovieAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // console.log(action);
        state.isSuccess = true;
        state.nowPlayMovie = action.payload;
      })
      .addCase(fetchNowPlayingMovieAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.error.message;
        state.nowPlayMovie = null;
      })
      .addCase(fetchPopularMovieAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchPopularMovieAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // console.log(action);
        state.isSuccess = true;
        state.popularMovie = action.payload;
      })
      .addCase(fetchPopularMovieAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.error.message;
        state.popularMovie = null;
      })
      .addCase(fetchUpcomingMovieAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchUpcomingMovieAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // console.log(action);
        state.isSuccess = true;
        state.upcomingMovie = action.payload;
      })
      .addCase(fetchUpcomingMovieAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        // console.log(action);
        state.error = action.error.message;
        state.upcomingMovie = null;
      })
      .addCase(fetchTopRatedMovieAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchTopRatedMovieAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        // console.log(action);
        state.isSuccess = true;
        state.topMovie = action.payload;
      })
      .addCase(fetchTopRatedMovieAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        // console.log(action);
        state.error = action.error.message;
        state.topMovie = null;
      })
  },
});

export default movieSlice.reducer;
