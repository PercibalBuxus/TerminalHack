import { Component, OnInit } from '@angular/core';
import { CrackerService } from '../cracker.service';

@Component({
  selector: 'app-password-cracker',
  templateUrl: './password-cracker.component.html',
  styleUrls: ['./password-cracker.component.css']
})
export class PasswordCrackerComponent implements OnInit {

  public str: string[];
  public size: number;
  public show: boolean;

  constructor(
    private cracker: CrackerService
  ) { }

  ngOnInit() {
    this.show = false;
  }

  async crack() {
    this.size = (Math.random() * 24) + 8;
    this.show = true;

    let promise = this.cracker.crack(this.size);

    await this.randomString();
    await promise.then(result => {
      this.str = result.split('');
      this.show = false;
    });
  }

  async randomString() {
    while (this.show) {
      setTimeout(() => {
        this.str = this.cracker.randomString(this.size).split('');
      }, 500);
    }
  }

}
