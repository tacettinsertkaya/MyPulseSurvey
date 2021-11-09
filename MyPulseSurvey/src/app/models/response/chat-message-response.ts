import { Chat } from "../chat";
import { ChatMessage } from "../chat-message";

export class ChatMessageResponse{
    chat:Chat;
    messages:Array<ChatMessage>=[];
}