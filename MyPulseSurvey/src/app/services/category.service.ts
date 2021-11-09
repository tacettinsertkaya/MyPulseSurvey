import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";
import { EndPoints } from "./end-points";
import { Category} from '../models/category'
import { isNullOrUndefined } from "util";

import {Observable} from 'rxjs';
import { environment } from "src/environments/environment";
import { ResponseData } from "../models/response/response-data";
import { CategoryFilter } from "../models/filter/category/category-filter";
import { CategoryListFilter } from "../models/filter/category/category-list-filter";
import { PaginatedResponse } from "../models/response/paginated-reponse";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  create(Category: Category) :Observable<ResponseData<Category>> {
   
    return this.baseService.post<Category>(
      Category,
      environment.serverBaseUrl,
      EndPoints.CATEGORY+'/Create'
    );
  }

  update(Category: any):Observable<ResponseData<Category>> {
    return this.baseService.update<Category>(
      Category,
      environment.serverBaseUrl,
      EndPoints.CATEGORY + "/Update"
    );
  }

  delete(id: any): Observable<ResponseData<any>> {
   
    return this.baseService.get(
      id,
      environment.serverBaseUrl,
      EndPoints.CATEGORY + "/Delete"
    );
  }

  getCategory(filter:CategoryFilter): Observable<ResponseData<Category>>  {

    return this.baseService.post<Category>(
      filter,
      environment.serverBaseUrl,
      EndPoints.CATEGORY+'/GetByFilterAsync'
    );
  }

  getAllCategory(filter:CategoryListFilter): Observable<PaginatedResponse<Category>> {
    return this.baseService.listpost<Category>(
      filter,
      environment.serverBaseUrl,
      EndPoints.CATEGORY+'/GetListByFilterAsync'
    );
  }
}
