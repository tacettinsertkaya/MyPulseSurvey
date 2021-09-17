import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  question:number=1;
  totalQuestion:number=5;
  
  constructor() { }

  ngOnInit(): void {
  }

  prevQuestion(){
    --this.question;
    if(this.question<=1) {
      this.question=1;
      return;
    }
    if(this.question>=5){
       this.question=5;
       return
    }

  } 

  
  nextQuestion(){
   
    ++this.question;

    if(this.question<=1) {
      this.question=1;
      return;
    }
    if(this.question>=5){
       this.question=5;
       return
    }
    

  } 

}
