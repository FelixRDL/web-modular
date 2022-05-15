import { AfterViewInit, Component, OnInit } from '@angular/core';
import { filter, map, ObjectUnsubscribedError, Observable, skip } from 'rxjs';
import { MessageType } from './modules/entities/message';
import { Module } from './modules/entities/module';
import { Socket, SocketType } from './modules/entities/socket';
import { RegistryService } from './modules/registry.service';
import { SocketComponent } from './modules/socket/socket.component';
import { v4 as uuid } from 'uuid';
import { Wire } from './modules/entities/wire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'modular';
  public registry: Observable<{ sockets: {}; wires: {} }> = new Observable<{
    sockets: {};
    wires: {};
  }>();

  public modules: Module[] = [
    {
      id: uuid(),
      component: 'app-oscillator',
      sockets: [
        {
          id: uuid(),
          moduleId: 'asdasd',
          type: SocketType.Output,
          name: 'OUT',
        },
      ],
    },
    {
      id: uuid(),
      component: 'app-oscillator',
      sockets: [
        {
          id: uuid(),
          moduleId: 'asdasd',
          type: SocketType.Output,
          name: 'OUT',
        },
      ],
    },
  ];

  public wires: Wire[] = [];

  private sockets: Socket[] = [];

  constructor(private registryService: RegistryService) {
    this.registry = this.registryService.registry.asObservable();

    this.registry.subscribe((x) => {
      console.log(x);
    });

    this.registryService.bus
      .pipe(
        filter((message) => message.type == MessageType.socket_clicked),
        filter((message) => {
          const socketIds = this.sockets.map((s) => s.id);
          const thisId = message.payload.id;
          return !socketIds.includes(thisId);
        })
      )
      .subscribe((x) => {
        this.onSocketClicked(x.payload as Socket);
      });
  }

  private onSocketClicked(socket: Socket) {
    this.sockets.push(socket);

    if(this.sockets.length == 2) {
      this.addWire(this.sockets[0], this.sockets[1]);
      this.sockets = [];
    }
  }

  private addWire(from: Socket, to: Socket) {
    const thisWire: Wire = {
      from: from,
      to: to,
      id: uuid()
    };
    this.wires.push(thisWire);
    this.registryService.bus.next({
      type: MessageType.wire_added,
      payload: thisWire,
      issuedBy: thisWire.id ?? ""
    });
  }
}
