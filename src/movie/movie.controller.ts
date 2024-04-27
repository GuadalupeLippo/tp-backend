import { Controller, Get, Post, Body, Patch, Param, Delete,ParseUUIDPipe } from '@nestjs/common';
import { MovieService } from './movie.service';


@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  findMovies() {
    return this.movieService.findMovies();
  }

  @Get(':id')
  findOneMovie(@Param('id',ParseUUIDPipe) id: string) {
    return this.movieService.findOneMovie(id);
  }


}
