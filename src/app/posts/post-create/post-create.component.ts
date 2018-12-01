import { Component } from "@angular/core";

@Component({
  selector:'app-post-create',
  templateUrl: 'post-create.template.html',
  styleUrls: ['post-create.component.css']
}
)
export class PostCreateComponent {
  newPost= 'test';
  enteredValue='';
  onAddPost(){
    this.newPost=this.enteredValue;
  }
}
