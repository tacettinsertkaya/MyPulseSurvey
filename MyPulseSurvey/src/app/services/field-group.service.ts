import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../models/response/response-data';
import { BaseService } from './base.service';
import { EndPoints } from './end-points';
import { FieldGroup} from '../models/entity/field-group/field-group'
import { FieldGroupFilter } from '../models/filter/field-group/field-group-filter';
import { FieldGroupListFilter } from '../models/filter/field-group/field-group-list-filter';
import { PaginatedResponse } from '../models/response/paginated-reponse';

@Injectable({
  providedIn: 'root'
})
export class FieldGroupService {

  constructor(private http: HttpClient, private baseService: BaseService) {}

  create(FieldGroup: FieldGroup) :Observable<ResponseData<FieldGroup>> {
   
    return this.baseService.post<FieldGroup>(
      FieldGroup,
      environment.serverBaseUrl,
      EndPoints.FIELD_GROUP+'/Create'
    );
  }

  update(FieldGroup: any):Observable<ResponseData<FieldGroup>> {
    return this.baseService.update<FieldGroup>(
      FieldGroup,
      environment.serverBaseUrl,
      EndPoints.FIELD_GROUP + "/Update"
    );
  }

  delete(id: any): Observable<ResponseData<any>> {
   
    return this.baseService.get(
      id,
      environment.serverBaseUrl,
      EndPoints.FIELD_GROUP + "/Delete"
    );
  }

  getFieldGroup(filter:FieldGroupFilter): Observable<ResponseData<FieldGroup>>  {

    return this.baseService.post<FieldGroup>(
      filter,
      environment.serverBaseUrl,
      EndPoints.FIELD_GROUP+'/GetByFilterAsync'
    );
  }

  getAllFieldGroup(filter:FieldGroupListFilter): Observable<PaginatedResponse<FieldGroup>> {
    return this.baseService.listpost<FieldGroup>(
      filter,
      environment.serverBaseUrl,
      EndPoints.FIELD_GROUP+'/GetListByFilterAsync'
    );
  }
}
