import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  @Input()
  width: number = 8;
  @Input()
  height: number = 1;
  @Input()
  zoom: number = 4;
  @Input()
  color: string = "#D6D6D6";

  constructor() { }

  ngOnInit(): void {
  }

}
