import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { MatListModule } from '@angular/material/list'
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from '../messages/messages.component';

@NgModule({
  declarations: [PokemonListComponent, MessagesComponent],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    MatListModule,
    HttpClientModule
  ]
})
export class PokemonsModule { }
