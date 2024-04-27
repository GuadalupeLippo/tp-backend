import { Injectable, NotFoundException } from '@nestjs/common';
import {movies} from '../data/movies.json';
import { iMovies } from './entities/movie.interface';




@Injectable()
export class MovieService {

  findMovies() : any {
    return movies;
  }

   findOneMovie(id: string) : iMovies { 
      const movie = movies.find(movie => movie.id === id);
      if(!movie) {
          throw new NotFoundException()
      }
    return movie;

}
  }

