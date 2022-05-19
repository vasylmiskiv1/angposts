import { Component, Input, OnInit } from '@angular/core';

import {Post} from '../../Post';

@Component({
  selector: 'app-home-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  public isLoaded: boolean = true;
  @Input() posts!: Post[];
  @Input() currentInput!:string;

  constructor() {}

  ngOnInit(): void {}

  }
