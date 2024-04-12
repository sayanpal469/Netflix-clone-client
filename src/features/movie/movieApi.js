import axios from "axios";
import { api_key, movieBaseUrl } from "../../constant/movie";

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
