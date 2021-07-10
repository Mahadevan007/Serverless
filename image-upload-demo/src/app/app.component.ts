import { Component } from '@angular/core';
import { UploadserviceService } from './uploadservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'image-upload-demo';

  constructor(private uploadService: UploadserviceService) {}

  uploadFile(event: any) {
    console.log(event);
    console.log(event.target.files);
    this.uploadService.uploadFile(
      event.target.files[0],
      event.target.files[0].name
    );
    event.preventDefault();
  }
}
