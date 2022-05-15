import { Socket } from "./socket";


export interface Wire {
    id?: string,
    from: Socket,
    to: Socket
}