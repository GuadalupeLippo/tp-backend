import { Injectable, NotFoundException } from '@nestjs/common';
import {movies} from '../data/movies.json'




@Injectable()
export class MovieService {

  findMovies() {
    return movies;
  }

   findOneMovie(id: string) { 
      const movie = movies.find(movie => movie.id === id);
      if(!movie) {
          throw new NotFoundException()
      }
    return movie;

}
  }

