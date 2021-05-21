import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter = 0;
  text = '';

  pessoas = [
    {
      nome: "Tami",
      sobrenome: "Sakita",
      cargo: "Programadora"
    },
    {
      nome: "Mel",
      sobrenome: "Melody",
      cargo: "Artista"
    },
    {
      nome: "João",
      sobrenome: "Silva",
      cargo: "Professor"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  aumentar(): void {
    this.counter++;
    console.log('Aumentando')
  }

  diminuir(): void {
    this.counter--;
    console.log('Diminuindo')
  }


}
