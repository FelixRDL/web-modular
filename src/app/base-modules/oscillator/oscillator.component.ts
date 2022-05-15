import { Component, Input, OnInit } from '@angular/core';
import { Module } from 'src/app/modules/entities/module';

@Component({
  selector: 'app-oscillator',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.scss']
})
export class OscillatorComponent implements OnInit {

  @Input()
  model?: Module;

  constructor() { }

  ngOnInit(): void {
  }

}
