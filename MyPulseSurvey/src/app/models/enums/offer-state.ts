import { State } from "../state"

export const OFFERSTATE=[
    {id:-1,text:'İade',value:'ConfirmReject',color:'text-danger',badge:'badge badge-danger',bg:'bg-danger'},
    {id:0,text:'Değerlendirme Bekliyor',value:'ConfirmWaiting',color:'text-primary',badge:'badge badge-primary',bg:'bg-primary'},
    {id:1,text:'Mecliste',value:'CouncilWaiting',color:'text-primary',badge:'badge badge-primary',bg:'bg-primary'},
    {id:2,text:'Meclis Ret',value:'CouncilReject',color:'text-danger',badge:'badge badge-danger',bg:'bg-danger'},
    {id:4,text:'Yönetimde',value:'LegationWaiting',color:'text-primary',badge:'badge badge-primary',bg:'bg-primary'},
    {id:5,text:'Yönetim Ret',value:'LegationReject',color:'text-danger',badge:'badge badge-danger',bg:'bg-danger'},
    {id:6,text:'Kabul',value:'LegationAccept',color:'text-success',badge:'badge badge-success',bg:'bg-success'},
    {id:8,text:'Projelendirildi',value:'CoordinatorProcess',color:'text-primary',badge:'badge badge-primary',bg:'bg-primary'},
    {id:9,text:'İptal edildi',value:'CoordinatorReject',color:'text-danger',badge:'badge badge-danger',bg:'bg-danger'},
    {id:10,text:'Uygulanıyor',value:'CoordinatorCompleted',color:'text-success',badge:'badge badge-success',bg:'bg-success'},
];




