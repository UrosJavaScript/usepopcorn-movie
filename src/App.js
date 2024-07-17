import { useEffect, useState } from "react";
import { NavBar } from "./components/nav";
import { Main } from "./components/main";
// import { tempMovieData } from "./helpers/tempMovieData";
import { Search } from "./components/search";
import { NumResults } from "./components/numResults";
import { Box } from "./components/box";
import { MovieList } from "./components/movieList";
// import { tempWatchedData } from "./helpers/tempWatchedData";
import { WatchedSummary } from "./components/watchedSummary";
import { WatchedMoviesList } from "./components/watchedList";
import { Loader } from "./components/loader";

const KEY = "97e6c7f0";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = "interstellar";

  useEffect(function () {
    async function fetchMovies() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await res.json();
      setMovies(data.Search);
      setIsLoading(false);
    }

    fetchMovies();
  }, []);

  console.log("movies: ", movies);

  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>{isLoading ? <Loader /> : <MovieList movies={movies} />}</Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
