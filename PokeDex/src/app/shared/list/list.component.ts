import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  public getAllPokemons : any;

  private setAllPokemons : any;

  constructor(
    private pokeApiService: PokeApiService
    ){}

    ngOnInit(): void { 
        this.pokeApiService.apiListAllPokemons.subscribe(
          res => {
          this.setAllPokemons = res.results;
          this.getAllPokemons = this.setAllPokemons;
          });
    }

    public filterPokemon(value : string ) : void{
      const filter = this.setAllPokemons.filter( ( res : any ) =>{
        return !res.name.indexOf(value.toLowerCase());
      });

      this.getAllPokemons = filter;
    }
}
