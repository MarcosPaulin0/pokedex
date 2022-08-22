import { Component, Input, OnInit } from '@angular/core';
import { getPokemonImage, getPokemonNumber, Pokemon } from 'src/_model/Pokemon.types';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon!: Pokemon;

  getPokemonImage = getPokemonImage;
  getPokemonNumber = getPokemonNumber;

  constructor() { }

  ngOnInit() {
  }

}
