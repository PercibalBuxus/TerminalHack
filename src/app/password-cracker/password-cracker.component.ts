import { Component, OnInit } from '@angular/core';
import { CrackerService } from '../cracker.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-password-cracker',
  templateUrl: './password-cracker.component.html',
  styleUrls: ['./password-cracker.component.css']
})
export class PasswordCrackerComponent implements OnInit {

  public str: string[];
  public tempstr: string[];
  public size: number;
  public show: boolean;

  constructor(
    private cracker: CrackerService,
    private router: Router,
    private route: ActivatedRoute,
    private msg : MessageService
  ) { }

  ngOnInit() {
    this.show = false;
    this.route.queryParams.subscribe((data) => {
      if(data == null || typeof data == undefined){
        return;
      }
      console.log(data)
    });

    setInterval(()=>{
      switch(this.msg.getMessage()){
        case "START":
          this.crack();
          this.msg.setMessage('');
        default: return;
      }
    },1000);
  }

  async crack() {
    this.size = (Math.random() * 24) + 8;
    this.show = true;
    console.log("started");
    let variable;

    await setInterval(() => {
      this.tempstr = this.cracker.randomString(this.size).split('');
    },50);

    await this.cracker.crack(this.size)
    .then(result => {
      this.str = result.split('');
      this.show = false;
      console.log(result);
      console.log("finished");
    });
  }
}
