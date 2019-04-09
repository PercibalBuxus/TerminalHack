import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  toMemoryMapper(){
    this.router.navigateByUrl('/memoryMapper');
  }

  toPasswordCrack(){
    this.router.navigateByUrl('/passwordCrack');
  }

}
