import { Component, Input, OnInit } from '@angular/core';
import { SurveyQuestion } from 'src/app/models/entity/survey/survey-question';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  @Input() currentQuestion:SurveyQuestion | null=null;

  constructor() { }

  ngOnInit(): void {
  }

}
