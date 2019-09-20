import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../pokemons/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon : Pokemon;

  constructor(private route: ActivatedRoute, private heroService: PokemonService, private location: Location) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getPokemon(id).subscribe(result => this.pokemon = result);
  }

  goBack() {
    this.location.back();
  }
  
}
