import { Component, OnInit } from '@angular/core';
import { Post } from '../classes/post';
import { PostService } from '../services/post-service';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit {

  public foo!: Promise<number>;

  constructor(
    public postService: PostService
  ) {

  }
  ngOnInit(): void {
    this.sendNumber(7);
  }

  public sendNumber(n: number): void {
    this.foo = new Promise((resolve, reject) => {
      if (n >= 5) {
        resolve(n);
      } else {
        reject(n);
      }
    });

    this.foo.then(resolve => {
      console.log(`Resolve: ${resolve}`);
    }).catch(reject => {
      console.log(`Reject: ${reject}`);
    });
  }

}
