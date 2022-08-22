import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/_services/pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {


  constructor(public pokemonService: PokemonService) { }

  ngOnInit() {
  }

}
