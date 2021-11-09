import { HttpClient, HttpEventType } from '@angular/common/http';
import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UploadService } from '../../services/upload.service';
import { environment } from '../../../environments/environment';
import { FileResponse } from 'app/models/dto/file-reponse';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {

  public progress: number;
  public message: string;

  formData: any;
  @Output() files = new EventEmitter<Array<FileResponse>>();
  
  fileList: Array<FileResponse> = [];
  image: any;
  selectedFile: File;
  uploadData = new FormData();

  constructor(private http: HttpClient,private uploadService:UploadService) { }
  ngOnInit() {
  }


  onFilesSelected(evt: Event) {
    const files: FileList = (evt.target as HTMLInputElement).files;
    const formData = new FormData();

     let filesNames:Array<string>=[];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // IMPORTANT: 'files' must match parameter name in controller's action
      formData.append("filesObject", file, file.name);

      filesNames.push(file.name);
    }


    this.message='';
    this.http.post( environment.serverBaseUrl + '/FileUpload/DocumentUpload', formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {

      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Başarılı';

        this.fileList.push(<any>event.body);
        this.files.emit(this.fileList)
      
        // this.onUploadFinished.emit(event.body);
      }
    });

 

    // this.uploadService
    //   .DOCUMENT_UPLOAD(formData)
    //   .pipe(first())
    //   .subscribe((result) => {
         
    //     this.fileList=result;

      

    //     this.files.emit(this.fileList)


    //     // this.uploadService
    //     // .GET_IMAGE(path)
    //     // .pipe(first())
    //     // .subscribe((res) => {

    //     //   this.imageList = res;
    //     //   console.log("  this.imageList",  this.imageList);
    //     //   this.images.emit(this.imagePathList)

    //     // });


    //   });
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];

    this.uploadData.append("filesObject", this.selectedFile);

  }


  removeFile(file:FileResponse) {

    if (file) {
      let exist=this.fileList.find(p=>p.fileName==file.fileName)
      let existIndex=this.fileList.indexOf(exist);
      this.fileList.splice(existIndex,1)
      this.files.emit(this.fileList);
      this.selectedFile = null;
      this.uploadData = null;
    }
  }


  onUpload() {}

}
