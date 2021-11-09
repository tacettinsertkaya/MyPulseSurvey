export enum SURVEY_STATE {


    Draft = 0,
    SendVoting = 1,
    Complete = 2,
    Canceled = 3

};

export const SURVEY_STATE_DATA:Array<{text:string,value:number,color:string}>=
    [
        {
            text:'Taslak',
            value:SURVEY_STATE.Draft,
            color:'warning'
        },
        {
            text:'Gönderildi',
            value:SURVEY_STATE.SendVoting,
            color:'success'
        },
        {
            text:'Tamamlandı',
            value:SURVEY_STATE.Complete,
            color:'secondary'
        },
        {
            text:'İptal Edildi',
            value:SURVEY_STATE.Canceled,
            color:'danger'
        }
    ]
