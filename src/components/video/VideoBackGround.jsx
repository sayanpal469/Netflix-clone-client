import axios from "axios";
import { useEffect, useState } from "react";

const VideoBackGround = () => {
  const [movies, setMovies] = useState([]);

  // Extracting the ID of the first movie
  const id = movies.length > 0 ? movies[20].key : "";
  // console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/693134/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjhjNDI3NTQ2YTBjN2YyN2JhODdkNWQ1ZmE1ZDFmZSIsInN1YiI6IjY2MTdmNzg3MWZkMzZmMDE3Y2FkNjE3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3iLuI7A1WvRvLXAeQpXkWsJW62TiQC2TpnU5vJDUQ2M",
        },
      };

      try {
        const response = await axios.request(options);
        setMovies(response.data.results);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-screen z-30 ">
      {id && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${id}?si=HrxBMRICYXbY3eJC?&autoplay=0&mute=0`}
          title="YouTube video player"
          allow="autoplay"
          frameBorder="0"
          allowFullscreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackGround;
