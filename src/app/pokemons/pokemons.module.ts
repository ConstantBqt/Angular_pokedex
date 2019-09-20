import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatChipsModule } from "@angular/material/chips";
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MessagesComponent } from '../messages/messages.component';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';
import { MatButtonModule } from '@angular/material/button';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokedexComponent } from '../pokedex/pokedex.component';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [PokemonListComponent, MessagesComponent, PokemonDetailsComponent, PokedexComponent],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatListModule,
    MatCardModule,
    MatGridListModule, 
    MatChipsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    InfiniteScrollModule,
    MatSidenavModule
  ]
})
export class PokemonsModule { }
