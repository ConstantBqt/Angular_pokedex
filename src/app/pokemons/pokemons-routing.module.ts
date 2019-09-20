import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from '../pokedex/pokedex.component';


const routes: Routes = [
  { path: 'pokemonList', component: PokedexComponent },
  { path: '', redirectTo: 'pokemonList', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
