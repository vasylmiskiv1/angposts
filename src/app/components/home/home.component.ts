import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import {Post} from '../../Post'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts: Post[] = []
  currentInput: string = '';

  constructor(private PostService: PostService) {}

  ngOnInit(): void {}

  newInputValue(newValue: string) {
    this.currentInput = newValue;
    
    if(!this.currentInput.length) {
      this.posts = []
    } else {
      this.PostService.getPostsByKeyword(this.currentInput )
      .subscribe(data => {
        this.posts = data.articles
      })
    }
  }
}
