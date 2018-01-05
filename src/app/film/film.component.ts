import { Component, OnInit } from '@angular/core';
import { FilmService, IFilm, IResult } from '../services/film-service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
Filmdata: IFilm[];

  constructor(private service: FilmService) { }
  ngOnInit() {
    this.service.getPopularFilms()
    .subscribe(d => this.Filmdata = d.results);
  }

}
