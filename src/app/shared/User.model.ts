import { Message } from "./message.model";

export class User {
    constructor(public userName : string,public password : string,public chatInitiated : boolean){}

    messages : Message[]=[];
}