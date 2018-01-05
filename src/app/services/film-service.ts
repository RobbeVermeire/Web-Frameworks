import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
    export class FilmService {
        constructor(private http: HttpClient) {}

        getPopularFilms(): Observable<IResult> {
            return this.http.get<IResult>(
                'https://api.themoviedb.org/3/movie/upcoming?api_key=5ee6c9cd404115d6617f063ea69f70c5&language=en-US&page=1'
            );
        }
   }
   export interface IResult {
       results: IFilm[];
        }
    export interface IFilm {
              vote_count: number;
              id: number;
              video: boolean;
              vote_average: number;
              title: string;
              popularity: number;
              poster_path: string;
              original_language: string;
              original_title: string;
              genre_ids: number[] ;
              backdrop_path: string;
              adult: boolean;
              overview: string;
              release_date: string;
            }
