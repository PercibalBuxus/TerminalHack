import { Component, OnInit } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { load } from '@angular/core/src/render3';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {
  private index = 0;
  public loaded = false;
  private content = [['-rw-r--r--','1','user','user','0','ápr','22','23:39','contacts.txt'],
  ['drwxr-xr-x','2','user','user','4096','ápr','22','23:39','Documents'],
  ['drwxr-xr-x','2','user','user','4096','ápr','22','23:39','Downloads'],
  ['-rw-r--r--','1','user','user','0','ápr','22','23:39','important.data'],
  ['-rw-r--r--','1','user','user','0','ápr','22','23:40','list.cat'],
  ['drwxr-xr-x','2','user','user','4096','ápr','22','23:39','Pictures'],
  ['drwxr-xr-x','2','user','user','4096','ápr','22','23:39','projects'],
  ['drwxr-xr-x','2','user','user','4096','ápr','22','23:39','System32']
  ];

  constructor(private router: Router,
    private termMsg: MessageService) {
    this.load();
   }

  ngOnInit() {
    
  }

  async load(){
    await setInterval( () => {
      if(this.index <  this.content.length){
        this.index++;
        this.loaded = true;
        this.termMsg.setTermMessage(this.content[this.index].join('  '));
      }
    },500);
  }

  exit(){
    this.router.navigateByUrl('');
  }

}
