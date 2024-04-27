import { Controller, Get, Post, Body, Patch, Param, Delete,ParseUUIDPipe } from '@nestjs/common';
import { MovieService } from './movie.service';
import { iMovies } from './entities/movie.interface';


@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findMovies() : iMovies {
    return this.movieService.findMovies();
  }

  @Get(':id')
  findOneMovie(@Param('id',ParseUUIDPipe) id: string) : iMovies {
    return this.movieService.findOneMovie(id);
  }


}
