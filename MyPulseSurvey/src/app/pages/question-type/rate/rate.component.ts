import { Component, Input, OnInit } from '@angular/core';
import { SurveyQuestion } from 'src/app/models/entity/survey/survey-question';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  @Input() currentQuestion:SurveyQuestion | null=null;

  constructor() { }

  ngOnInit(): void {
  }

}
