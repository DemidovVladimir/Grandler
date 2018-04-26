import { TestBed, inject } from '@angular/core/testing';

import { FirebaseFileUploadService } from './firebase-file-upload.service';

describe('FirebaseFileUploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseFileUploadService]
    });
  });

  it('should be created', inject([FirebaseFileUploadService], (service: FirebaseFileUploadService) => {
    expect(service).toBeTruthy();
  }));
});
