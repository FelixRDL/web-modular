import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { MessageType } from '../entities/message';
import { Socket } from '../entities/socket';
import { RegistryService } from '../registry.service';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.scss']
})
export class SocketComponent implements OnInit, AfterViewInit {

  @Input()
  model?: Socket;

  @ViewChild('socketCenter') center?: any;

  public id: string;

  constructor(
    private registryService: RegistryService) { 
    this.id = uuid();
    this.registryService.addSocket(this);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {  
    if(!this.model)
      return;
    this.model.el = this.center;
  }

  public click() {
    this.registryService.bus.next({
      issuedBy: this.id,
      payload: this.model,
      type: MessageType.socket_clicked
    })

  }
  

  public getId(): string {
    return this.id;
  }

  public getPosition(): {x: number, y: number} {
    const rect = this.center?.nativeElement.getBoundingClientRect();
    if(!rect)
      return {x: 0, y:0};
    return {
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY
    };
  }

}
