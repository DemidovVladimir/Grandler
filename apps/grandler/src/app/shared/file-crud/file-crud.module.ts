import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUploadComponent } from './list-upload/list-upload.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { DetailsUploadComponent } from './details-upload/details-upload.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  declarations: [
    ListUploadComponent,
    FormUploadComponent,
    DetailsUploadComponent
  ],
  exports: [
    ListUploadComponent,
    FormUploadComponent,
    DetailsUploadComponent
  ]
})
export class FileCrudModule {
}
