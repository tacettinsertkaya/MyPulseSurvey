import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";
import { environment } from "../../environments/environment";
import { EndPoints } from "./end-points";
import { Company } from "../models/company";
import { isNullOrUndefined } from "util";
import { CompanyListFilter } from "app/models/filter/company-list-filter";
import { PaginatedResponse } from "app/models/response/paginated-reponse";
import {Observable} from 'rxjs';
import { ResponseData } from "app/models/response/response-data";
import { CompanyFilter } from "app/models/filter/company-filter";
import { RolePermissionResponse } from "app/models/response/role-permission-response";
import { PermissionListFilter } from "app/models/filter/permission-list-filter";
import { PageRoles } from "app/models/page-roles";
import { PageRoleListFilter } from "app/models/filter/page-role-list-filter";

@Injectable()
export class PermissionService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

 

  update(rolePermissionResponse: any):Observable<ResponseData<RolePermissionResponse>> {
    return this.baseService.update<RolePermissionResponse>(
      rolePermissionResponse,
      environment.serverBaseUrl,
      EndPoints.PERMISSION + "/Update"
    );
  }


  

  getAllPermission(filter:PermissionListFilter): Observable<PaginatedResponse<RolePermissionResponse>> {
    return this.baseService.listpost<RolePermissionResponse>(
      filter,
      environment.serverBaseUrl,
      EndPoints.PERMISSION+'/GetListByFilterAsync'
    );
  }

  getPageRoles(filter:PageRoleListFilter): Observable<PaginatedResponse<PageRoles>> {
    return this.baseService.listpost<PageRoles>(
      filter,
      environment.serverBaseUrl,
      EndPoints.PERMISSION+'/GetPageRoleListByFilterAsync'
    );
  }
}
