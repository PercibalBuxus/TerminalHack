import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrackerService {

  private httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  randomString(size: number): String {

    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789!+?.-_@&#><';
    let arr = this.shuffle(characters);
    let str = new Array();
    for (var i = 0; i < size; i++) {
      str.push(arr[i]);
    }
    return str.join('');
  }

  private shuffle(str: string){
    let arr = str.split('');
    var j, temp;
    for (var i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr.join('');
  }
  randomGarbageData(size: number): String {

    let characters = '!+?.-_@&#><[](){}';
    let arr = this.shuffle(characters).split('');
    
    let str = new Array();
    for (var i = 0; i < size; i++) {
      arr = this.shuffle(arr.join('')).split('');
      str.push(arr[i]);
    }
    return str.join('');
  }

  async crack(size: number) : Promise<String> {
    return await new Promise<String>(resolve => {
      setTimeout(() => {
        console.log("wait");
        resolve(this.randomString(size));
      }, Math.floor((Math.random() * 10) + 1) * 1000);
    });
  }

  async getGarbageData(size: number) : Promise<String>{
    return this.randomGarbageData(size);
  }

  async getPasswords(size: Number, quantity: Number) {
    let param = new HttpParams()
      .set("size", size.toString())
      .set("quantity",quantity.toString());
  
    return await this.http.get("/passwords",{ params: param});
  }
}
