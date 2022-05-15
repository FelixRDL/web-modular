import { ElementRef } from "@angular/core";

export enum SocketType {
    Input,
    Output
}

export interface Socket {
    type: SocketType;
    id: string;
    moduleId: string;
    name: string;
    el?: ElementRef;
}