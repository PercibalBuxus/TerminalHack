import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private termMsg: string;
  private msg: string

  constructor() { 
    this.termMsg = '';
    this.msg = '';
  }

  getMessage(){
    return this.msg;
  }

  setMessage(value){
    this.msg = value;
  }

  getTermMessage(){
    return this.termMsg;
  }

  setTermMessage(value){
    console.log("Terminal Message: " + value);
    this.termMsg = value;
  }
}
