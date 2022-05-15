import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Message } from './entities/message';
import { Module } from './entities/module';
import { SocketComponent } from './socket/socket.component';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  public bus: Subject<Message> = new Subject<Message>();

  registry: BehaviorSubject<{
    sockets: {},
    wires: {},
    modules: Module[]
  }> = new BehaviorSubject<
  {
    sockets: {},
    wires: {},
    modules: Module[]
  }>({sockets: {}, wires: {}, modules: []});

  constructor() { }

  public addSocket(socket: SocketComponent): void {
    const id: string = socket.getId();
    const state = this.registry.getValue();
    let sockets: any = state.sockets;
    sockets[id] = socket;
    state.sockets = sockets;
    this.registry.next(state);
  }
}
