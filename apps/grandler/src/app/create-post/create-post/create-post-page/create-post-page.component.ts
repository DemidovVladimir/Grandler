import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.scss']
})
export class CreatePostPageComponent implements OnInit {
  createPost: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createPost = this.fb.group({
      title: ['', []]
    });
  }
}
