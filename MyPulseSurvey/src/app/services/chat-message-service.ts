import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BaseService } from "./base.service";
import { environment } from "../../environments/environment";
import { EndPoints } from "./end-points";
import { ChatMessage } from "../models/chat-message";
import { ChatMessageListFilter } from "../models/filter/chat-message-list-filter";
import { PaginatedResponse } from "../models/response/paginated-reponse";
import {Observable} from 'rxjs';
import { ResponseData } from "../models/response/response-data";
import { ChatMessageFilter } from "../models/filter/chat-message-filter";
import { MessageData } from "../models/message-data";

@Injectable({
  providedIn: 'root'
})
export class ChatMessageService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  create(ChatMessage: ChatMessage) :Observable<ResponseData<ChatMessage>> {
   
    return this.baseService.post<ChatMessage>(
      ChatMessage,
      environment.serverBaseUrl,
      EndPoints.CHAT_MESSAGE+'/Create'
    );
  }

  update(ChatMessage: any):Observable<ResponseData<ChatMessage>> {
    return this.baseService.update<ChatMessage>(
      ChatMessage,
      environment.serverBaseUrl,
      EndPoints.CHAT_MESSAGE + "/Update"
    );
  }

  delete(id: any): Observable<ResponseData<any>> {
   
    return this.baseService.delete(
      id,
      environment.serverBaseUrl,
      EndPoints.CHAT_MESSAGE + "/Delete"
    );
  }

  getChatMessage(filter:ChatMessageFilter): Observable<ResponseData<ChatMessage>>  {

    return this.baseService.post<ChatMessage>(
      filter,
      environment.serverBaseUrl,
      EndPoints.CHAT_MESSAGE+'/GetByFilterAsync'
    );
  }

  getAllChatMessage(filter:ChatMessageListFilter): Observable<PaginatedResponse<ChatMessage>> {
    return this.baseService.listpost<ChatMessage>(
      filter,
      environment.serverBaseUrl,
      EndPoints.CHAT_MESSAGE+'/GetListByFilterAsync'
    );
  }

  
  sendNotification(messageData: MessageData) {
    return this.baseService.post<boolean>(
      messageData,
      environment.serverBaseUrl,
      EndPoints.CHAT_MESSAGE+'/MessageNew'
    );
}

sendCoordinatorNotification(messageData: MessageData) {

  return this.baseService.post<boolean>(
    messageData,
    environment.serverBaseUrl,
    EndPoints.CHAT_MESSAGE + '/CoordinatorMessageNew'
  );
}




sendCouncilorNotification(messageData: MessageData) {
   
    return this.baseService.post<boolean>(
      messageData,
      environment.serverBaseUrl,
      EndPoints.CHAT_MESSAGE+'/CouncilorMessageNew'
    );
}
  
sendBasicNotification(messageData: MessageData) {

  return this.baseService.post<boolean>(
    messageData,
    environment.serverBaseUrl,
    EndPoints.CHAT_MESSAGE + '/BasicMessageNew'
  );
}


sendAdminNotification(messageData: MessageData) {
   
    return this.baseService.post<boolean>(
      messageData,
      environment.serverBaseUrl,
      EndPoints.CHAT_MESSAGE+'/AdminMessageNew'
    );
}
}
