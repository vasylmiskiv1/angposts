import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../../Post'

@Component({
  selector: 'app-home-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() post!: Post

  constructor() { }

  ngOnInit(): void {}

  textLimit (content:string) {
    if(content.length < 100) {
      return content
    } else {
      return content.substring(0,100).trim() + '...'
    }
  }

}
