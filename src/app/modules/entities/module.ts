import { Socket } from "./socket";


export interface Module {
    id: string;
    component: string;
    sockets: Socket[];
    node?: any;
    data?: any;
}