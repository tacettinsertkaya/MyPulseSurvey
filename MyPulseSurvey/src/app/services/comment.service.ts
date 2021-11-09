import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";
import { environment } from "../../environments/environment";
import { EndPoints } from "./end-points";
import { isNullOrUndefined } from "util";
import { PaginatedResponse } from "../models/response/paginated-reponse";
import {Observable} from 'rxjs';
import { ResponseData } from "../models/response/response-data";
import { CommentFilter } from "../models/filter/comment-filter";
import { CommentListFilter } from "../models/filter/comment-list-filter";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  create(Comment: Comment) :Observable<ResponseData<Comment>> {
   
    return this.baseService.post<Comment>(
      Comment,
      environment.serverBaseUrl,
      EndPoints.COMMENT+'/Create'
    );
  }

  update(Comment: any):Observable<ResponseData<Comment>> {
    return this.baseService.update<Comment>(
      Comment,
      environment.serverBaseUrl,
      EndPoints.COMMENT + "/Update"
    );
  }

  delete(id: any): Observable<ResponseData<any>> {
   
    return this.baseService.delete(
      id,
      environment.serverBaseUrl,
      EndPoints.COMMENT + "/Delete"
    );
  }

  getComment(filter:CommentFilter): Observable<ResponseData<Comment>>  {

    return this.baseService.post<Comment>(
      filter,
      environment.serverBaseUrl,
      EndPoints.COMMENT+'/GetByFilterAsync'
    );
  }

  getAllComment(filter:CommentListFilter): Observable<PaginatedResponse<Comment>> {
    return this.baseService.listpost<Comment>(
      filter,
      environment.serverBaseUrl,
      EndPoints.COMMENT+'/GetListByFilterAsync'
    );
  }
}
