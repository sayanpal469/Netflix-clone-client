import Header from "./Header";
import MainContainer from "./containers/MainContainer";
import MovieContainer from "./containers/MovieContainer";

const Browse = () => {
  return (
    <div className="relative">
      <Header />
      <div className="">
       <MainContainer/>
       <MovieContainer/>
      </div>
    </div>
  );
};

export default Browse;
