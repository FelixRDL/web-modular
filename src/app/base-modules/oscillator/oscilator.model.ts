import { Module } from "src/app/modules/entities/module";
import { Socket } from "src/app/modules/entities/socket";

export class Oscillator implements Module {
    id: string = "";
    component: string = "";
    sockets: Socket[] = [];
}