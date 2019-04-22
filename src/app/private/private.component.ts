import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  private list = [['-rw-r--r--','1','user','user','0','ápr','22','23:39','contacts.txt'],
  ['drwxr-xr-x','2','user','user','4096','ápr','22','23:39','Documents'],
  ['drwxr-xr-x','2','user','user','4096','ápr','22','23:39','Downloads'],
  ['-rw-r--r--','1','user','user','0','ápr','22','23:39','important.data'],
  ['-rw-r--r--','1','user','user','0','ápr','22','23:40','list.cat'],
  ['drwxr-xr-x','2','user','user','4096','ápr','22','23:39','Pictures'],
  ['drwxr-xr-x','2','user','user','4096','ápr','22','23:39','projects'],
  ['drwxr-xr-x','2','user','user','4096','ápr','22','23:39','System32']
  ];

  constructor() { }

  ngOnInit() {
  }

}
