import { Injectable, Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrackerService {

  constructor() { }

  randomString(size: number): String {

    let arr = 'abcdefghijklmnopqrstuvwxyz0123456789!+?.-_@&#><'.split('');

    var j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    let str = new Array();
    for (var i = 0; i < size; i++) {
      str.push(arr[i]);
    }
    return str.join('');
  }

  async crack(size: number) : Promise<String> {
    let str = new Promise<String>(resolve => {
      setTimeout(() => {
        console.log("wait");
        resolve(this.randomString(size));
      }, Math.floor((Math.random() * 10) + 1) * 1000);
    });
    return str;
  }
}
