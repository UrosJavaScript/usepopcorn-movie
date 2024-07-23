import { useState } from "react";
import { NavBar } from "./components/nav";
import { Main } from "./components/main";
import { Search } from "./components/search";
import { NumResults } from "./components/numResults";
import { Box } from "./components/box";
import { MovieList } from "./components/movieList";
import { WatchedSummary } from "./components/watchedSummary";
import { WatchedMoviesList } from "./components/watchedList";
import { Loader } from "./components/loader";
import { ErrorMessage } from "./components/erroMessage";
import { MovieDetails } from "./components/movieDetails";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  const handleSelectedMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };
  const handleCloseMovie = () => {
    setSelectedId(null);
  };
  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };
  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  return (
    <div className="wrapper">
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectedMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}
