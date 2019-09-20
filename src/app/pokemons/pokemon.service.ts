import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Observable , of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { PagedData } from '../models/paged-data.model';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonUrl: string = `${environment.apiUrl}/pokemons`;

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getPokemons(offset: number = 0, limit: number = 20): Observable<PagedData<Pokemon>> {
    this.log("fetched pokemons");
    const params = new HttpParams()
      .set('offset', `${offset}`)
      .set('limit', `${limit}`)
    return this.http.get<PagedData<Pokemon>>(this.pokemonUrl, {params})
      .pipe(
        tap(pokemons => this.log("fetched " + pokemons.data.length + " pokemon(s)")),
        catchError(this.handleError<any>('getPokemons', null))
      );
  }

  getPokemon(id: number): Observable<Pokemon> {
    this.log(`fetched pokemon id=${id}`);
    let url = `${this.pokemonUrl}/${id}`;
    return this.http.get<Pokemon>(url)
      .pipe(
        tap(pokemon => this.log(`fetched pokemon id=${pokemon.id}`)),
        catchError(this.handleError<Pokemon>(`getPokemon id=${id}`, null))
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
