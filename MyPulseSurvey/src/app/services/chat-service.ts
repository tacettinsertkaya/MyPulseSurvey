import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";

import { ChatListFilter } from "../models/filter/chat-list-filter";
import { PaginatedResponse } from "../models/response/paginated-reponse";
import {Observable} from 'rxjs';
import { ResponseData } from "../models/response/response-data";
import { ChatFilter } from "../models/filter/chat-filter";
import { ChatMessageResponse } from "../models/response/chat-message-response";
import { environment } from "src/environments/environment";
import { EndPoints } from "./end-points";
import { Chat } from "../models/chat";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  create(chat: Chat) :Observable<ResponseData<Chat>> {
   
    return this.baseService.post<Chat>(
      chat,
      environment.serverBaseUrl,
      EndPoints.CHAT+'/Create'
    );
  }

  update(chat: any):Observable<ResponseData<Chat>> {
    return this.baseService.update<Chat>(
      chat,
      environment.serverBaseUrl,
      EndPoints.CHAT + "/Update"
    );
  }

  delete(id: any): Observable<ResponseData<any>> {
   
    return this.baseService.get(
      id,
      environment.serverBaseUrl,
      EndPoints.CHAT + "/Delete"
    );
  }

  getChat(filter:ChatFilter): Observable<ResponseData<Chat>>  {

    return this.baseService.post<Chat>(
      filter,
      environment.serverBaseUrl,
      EndPoints.CHAT+'/GetByFilterAsync'
    );
  }

  getChatMessages(filter:ChatFilter): Observable<ResponseData<ChatMessageResponse>>  {

    return this.baseService.post<ChatMessageResponse>(
      filter,
      environment.serverBaseUrl,
      EndPoints.CHAT+'/GetChatMessageByFilterAsync'
    );
  }

  getAllChat(filter:ChatListFilter): Observable<PaginatedResponse<Chat>> {
    return this.baseService.listpost<Chat>(
      filter,
      environment.serverBaseUrl,
      EndPoints.CHAT+'/GetListByFilterAsync'
    );
  }
}
