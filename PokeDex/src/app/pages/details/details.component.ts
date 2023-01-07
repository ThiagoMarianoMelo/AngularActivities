import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon : string = 'https://pokeapi.co/api/v2/pokemon'
  private urlName : string  = 'https://pokeapi.co/api/v2/pokemon-species'

  public pokemon : any;

  constructor( 
    private pokeService : PokeApiService,
    private activateRoute : ActivatedRoute
    ){}

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon() : void{
    const id = this.activateRoute.snapshot.params['id'];
    const pokemon = this.pokeService.apiGetPokemons(`${this.urlPokemon}/${id}`)
    const name = this.pokeService.apiGetPokemons(`${this.urlName}/${id}`)

    //make searchs then join the results
    forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemon = res; 
      });
  }

}


