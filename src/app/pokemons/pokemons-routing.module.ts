import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';


const routes: Routes = [
  { path: 'pokemonList', component: PokemonListComponent },
  { path: 'detail/:id', component: PokemonDetailsComponent },
  { path: '', redirectTo: 'pokemonList', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
