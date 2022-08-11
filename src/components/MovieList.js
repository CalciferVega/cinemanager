import getAllMovies from '../services/getAllMovies';

export default function MovieList() {
  const movies = getAllMovies();
  return (
    <div className="movie-list ml-4 mr-4 mt-4 mb-10 grid grid-cols-2 gap-4">
      {movies.map(movie => {
        return (
          <a href={'/movie/' + movie.id} className="movie-item">
            <div className="movie-list-item rounded-2xl overflow-hidden">
              <img src={movie.image} alt={movie.name} />
            </div>
          </a>
        )
      })
      }
    </div>)
}