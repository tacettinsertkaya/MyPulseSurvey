import { Component, Input, OnInit } from '@angular/core';
import { SurveyQuestion } from 'src/app/models/entity/survey/survey-question';

@Component({
  selector: 'app-emotion',
  templateUrl: './emotion.component.html',
  styleUrls: ['./emotion.component.scss']
})
export class EmotionComponent implements OnInit {
  @Input() currentQuestion:SurveyQuestion | null=null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
