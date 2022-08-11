import {movies} from './seed';

export default function getMovie(id) {
    return movies.find(movie => movie.id === id);
}   