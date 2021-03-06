import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root',
})
export class UploadserviceService {
  constructor() {}

  uploadFile(file: any, key: any) {
    const contentType = file.type;
    const bucket = new S3({
      accessKeyId: '',
      secretAccessKey: '',
      // region: 'us-east-1',
      region: 'ap-south-1',
    });
    const params: any = {
      Bucket: 'linkedin-mahadevan-profilepic',
      // Bucket:'sample-bucket007',
      Key: key,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType,
    };
    bucket.upload(params, function (err: any, data: any) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      return true;
    });
  }
}
