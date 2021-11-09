import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../models/response/response-data';
import { BaseService } from './base.service';
import { EndPoints } from './end-points';

@Injectable({
  providedIn: 'root'
})
export class GroupUserService {

  constructor(private http: HttpClient, private baseService: BaseService) {}

  newUserGroup(data: any) :Observable<ResponseData<any>> {
   
    return this.baseService.post<any>(
      data,
      environment.serverBaseUrl,
      EndPoints.GROUPUSER+'/NewUserGroup'
    );
  }


}
