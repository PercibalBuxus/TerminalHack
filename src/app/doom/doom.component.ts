import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doom',
  templateUrl: './doom.component.html',
  styleUrls: ['./doom.component.css']
})
export class DoomComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  exit(){
    this.router.navigateByUrl('');
  }

}
