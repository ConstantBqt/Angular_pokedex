import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';


const routes: Routes = [
  { path: 'pokemonList', component: PokemonListComponent },
  { path: '', redirectTo: 'pokemonList', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
