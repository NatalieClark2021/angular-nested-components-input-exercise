import { Component, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
@Input() lastPosts = [];

  constructor() { }

  ngOnInit(): void {
  }

}
