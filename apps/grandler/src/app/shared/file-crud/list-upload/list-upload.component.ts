import { Component, OnInit } from '@angular/core';
import { FirebaseFileUploadService } from '../../../services/firebase-file-upload.service';

@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.scss']
})
export class ListUploadComponent implements OnInit {

  fileUploads: any[];

  constructor(private uploadService: FirebaseFileUploadService) {
  }

  ngOnInit() {
    // Use snapshotChanges().map() to store the key
    this.uploadService.getFileUploads(6).snapshotChanges().map(changes => {
      return changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
    }).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
    });
  }

}
