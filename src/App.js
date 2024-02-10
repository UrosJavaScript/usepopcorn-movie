import { useState } from "react";
import { NavBar } from "./components/nav";
import { Main } from "./components/main";
import { tempMovieData } from "./helpers/tempMovieData";
import { Search } from "./components/search";
import { NumResults } from "./components/numResults";
import { Box } from "./components/box";
import { MovieList } from "./components/movieList";
import { tempWatchedData } from "./helpers/tempWatchedData";
import { WatchedSummary } from "./components/watchedSummary";
import { WatchedMoviesList } from "./components/watchedList";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <NavBar>
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
