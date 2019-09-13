import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Observable , of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { PagedData } from '../models/paged-data.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonUrl: string = "http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons";

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getPokemons(): Observable<PagedData<Pokemon>> {
    this.log("fetched pokemons");
    return this.http.get<PagedData<Pokemon>>(this.pokemonUrl)
      .pipe(
        tap(pokemons => this.log("fetched " + pokemons.data.length + " pokemon(s)")),
        catchError(this.handleError<any>('getPokemons', null))
      );
  }

  private log(message: string) {
    this.messageService.add(`PokemonService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
