import axios from "axios";
import { api_key, movieBaseUrl, searchBaseUrl } from "../../constant/movie";

export const fetchNowPlayingMovie = async () => {
  try {
    const response = await axios.get(
      `${movieBaseUrl}/now_playing?api_key=${api_key}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data.status_message;
  }
};

export const fetchPopularMovie = async () => {
  try {
    const response = await axios.get(
      `${movieBaseUrl}/popular?api_key=${api_key}`
    );
    return response.data;
  } catch (error) {
    throw error.response.data.status_message;
  }
};

export const fetchUpcomingMovie = async () => {
  try {
    const response = await axios.get(
      `${movieBaseUrl}/upcoming?api_key=${api_key}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response.data.status_message;
  }
};

export const fetchTopRatedMovie = async () => {
  try {
    const response = await axios.get(
      `${movieBaseUrl}/top_rated?api_key=${api_key}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response.data.status_message;
  }
};

export const fetchMovieById = async (id) => {
  const options = {
    method: "GET",
    url: `${movieBaseUrl}/${id}/videos?api_key=${api_key}`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjhjNDI3NTQ2YTBjN2YyN2JhODdkNWQ1ZmE1ZDFmZSIsInN1YiI6IjY2MTdmNzg3MWZkMzZmMDE3Y2FkNjE3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3iLuI7A1WvRvLXAeQpXkWsJW62TiQC2TpnU5vJDUQ2M",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response.data.status_message;
  }
};

export const fetchSearchMovies = async (value) => {
  const options = {
    method: "GET",
    url: `${searchBaseUrl}?query=${value}&api_key=${api_key}`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjhjNDI3NTQ2YTBjN2YyN2JhODdkNWQ1ZmE1ZDFmZSIsInN1YiI6IjY2MTdmNzg3MWZkMzZmMDE3Y2FkNjE3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3iLuI7A1WvRvLXAeQpXkWsJW62TiQC2TpnU5vJDUQ2M",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error.response.data.status_message;
  }
};
