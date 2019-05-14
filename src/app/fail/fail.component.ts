import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.css']
})
export class FailComponent implements OnInit {

  constructor(
    private router: Router,
    private msg: MessageService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.msg.setTermMessage('CORRECT');
      this.router.navigateByUrl('');
    }, 5000);
  }

}
