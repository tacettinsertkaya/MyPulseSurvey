export class Message {
  id: string= "";
  subjectId: string= "";
  categoryId: string = "";
  retroId: string= "";
  clientuniqueid: string= "";
  type: string= "";
  messageText: string= "";
  date: Date=new Date()
  comments:Array<any> = [];
  isCategorized: boolean=false;
  commentCount:number=0;
  voteCount:number=0;
  userId:string='';
}
