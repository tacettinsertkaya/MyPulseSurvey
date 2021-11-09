import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginatedResponse } from '../models/response/paginated-reponse';
import { ResponseData } from '../models/response/response-data';
import { BaseService } from './base.service';
import { EndPoints } from './end-points';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient, private baseService: BaseService) {}

  getListByFilterAsync(data: any) :Observable<PaginatedResponse<any>> {
    return this.baseService.listpost<any>(
      data,
      environment.serverBaseUrl,
      EndPoints.GROUP+'/GetListByFilterAsync'
    );
  } 
  
  getByFilterAsync(data: any) :Observable<ResponseData<any>> {
   
    return this.baseService.post<any>(
      data,
      environment.serverBaseUrl,
      EndPoints.GROUP+'/GetByFilterAsync'
    );
  }

  delete(id: any): Observable<ResponseData<any>> {
   
    return this.baseService.get(
      id,
      environment.serverBaseUrl,
      EndPoints.GROUP + "/Delete"
    );
  }


  
}
