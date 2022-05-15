import { Component, Input, OnInit } from '@angular/core';
import { Wire } from '../entities/wire';
import { SocketComponent } from '../socket/socket.component';

@Component({
  selector: 'app-wire',
  templateUrl: './wire.component.html',
  styleUrls: ['./wire.component.scss']
})
export class WireComponent implements OnInit {

  @Input()
  public inputId?: string;
  @Input()
  public outputId?: string;

  @Input()
  public model?: Wire;

  public pStart: string = "0 0";
  public pEnd: string = "10 10";

  constructor() { }

  ngOnInit(): void {
    this.update();
  }

  public update(): void {
    const startPos = this.model?.from.el?.nativeElement.getBoundingClientRect();
    const endPos = this.model?.to.el?.nativeElement.getBoundingClientRect();
    const xStart = startPos?.left + startPos.width/2;
    const yStart =  startPos?.top + startPos.height/2;
    

    this.pStart = `${xStart} ${yStart}`;
    this.pEnd = `${endPos?.left + endPos.width/2} ${endPos?.top + endPos.height/2}`;
  }

}
