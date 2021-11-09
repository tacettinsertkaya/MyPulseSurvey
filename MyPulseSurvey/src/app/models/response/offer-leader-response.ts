import { AuthenticateResponse } from "../authenticate-response";

export class OfferLeaderResponse{
    user:AuthenticateResponse=new AuthenticateResponse();
    offerCount:number;
   
}