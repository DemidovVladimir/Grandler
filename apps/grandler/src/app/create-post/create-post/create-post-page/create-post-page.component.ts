import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.scss']
})
export class CreatePostPageComponent implements OnInit {
  createPost: FormGroup;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.createPost = this.fb.group({
      title: ['', []],
      file: [null, Validators.required]
    });
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.createPost.patchValue({
          file: reader.result
        });

        this.cd.markForCheck();
      };
    }
  }
}
