// src/app/components/fabricante-list/fabricante-list.component.ts
import { Component, OnInit } from '@angular/core';
import { FabricanteService } from '../../services/fabricante.service';
import { Fabricante } from '../../models/fabricante.model';

@Component({
  selector: 'app-fabricante-list',
  templateUrl: './fabricante-list.component.html',
  styleUrls: ['./fabricante-list.component.css']
})
export class FabricanteListComponent implements OnInit {

  fabricantes: Fabricante[] = [];

  constructor(private fabricanteService: FabricanteService) { }

  ngOnInit(): void {
    this.fabricanteService.getFabricantes().subscribe(data => {
      console.log('Fabricantes:', data); // Log the data to the console
      this.fabricantes = data;
    }, error => {
      console.error('Error fetching fabricantes:', error); // Log errors if any
    });
  }
}