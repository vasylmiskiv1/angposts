import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Output() newValueEvent = new EventEmitter();
  inputValue:string = ''
  constructor(private PostService: PostService) { }

  ngOnInit(): void {}

  inputChange(value:string) {
    this.inputValue = value
    this.newValueEvent.emit(this.inputValue)
  }
 
}
