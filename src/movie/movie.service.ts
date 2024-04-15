import { Injectable, NotFoundException } from '@nestjs/common';
import {movies} from '../data/movies.json'




@Injectable()
export class MovieService {

  findMovies() {
    return movies;
  }

   findOneMovie(id: string) {
    try{  
      const movie = movies.find(movie => movie.id === id);
    return movie;}
      catch (error) {
        throw new NotFoundException()
      }

}
  }

