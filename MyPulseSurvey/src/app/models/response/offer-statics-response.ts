import { OfferItemResponse } from "./offer-item-response";

export class OfferStaticsResponse{
    allOffer:number;
    process:number;
    completed:number;
    rejectOffer:number;
    offers:Array<OfferItemResponse>=[];

}