import { Component, OnInit, ViewChild, QueryList } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pokemon } from '../pokemon';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-components-table',
  templateUrl: './components-table.component.html',
  styleUrls: ['./components-table.component.css']
})
export class ComponentsTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dcPokemons: string[] = ['kdex', 'name', 'type'];
  dsPokemons: MatTableDataSource<Pokemon>;

  pokemons: Pokemon[] = [
    { kdex: 1, name: 'Bulbasaur', type: 'Grass' },
    { kdex: 4, name: 'Charmander', type: 'Fire' },
    { kdex: 33, name: 'Nidorino', type: 'Poison' },
    { kdex: 37, name: 'Vulpix', type: 'Fire' },
    { kdex: 79, name: 'Slowpoke', type: 'Water' },
    { kdex: 1, name: 'Bulbasaur', type: 'Grass' },
    { kdex: 4, name: 'Charmander', type: 'Fire' },
    { kdex: 33, name: 'Nidorino', type: 'Poison' },
    { kdex: 37, name: 'Vulpix', type: 'Fire' },
    { kdex: 79, name: 'Slowpoke', type: 'Water' },
  ];

  filtroName = new FormControl('');
  filtroAge = new FormControl('');

  constructor() {
    this.dsPokemons = new MatTableDataSource<Pokemon>();
  }

  ngOnInit() {
    this.dsPokemons.data = this.pokemons;
  }
  ngAfterViewInit() {
    this.dsPokemons.paginator = this.paginator;
  }
}