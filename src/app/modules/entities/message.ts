export enum MessageType {
    socket_clicked,
    wire_added,
    module_added
}

export interface Message {
    type: MessageType;
    payload: any;
    issuedBy: string;
}