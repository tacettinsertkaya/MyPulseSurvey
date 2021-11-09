import { Component, Input, OnInit } from '@angular/core';
import { SurveyQuestion } from 'src/app/models/entity/survey/survey-question';

@Component({
  selector: 'app-multi-selection',
  templateUrl: './multi-selection.component.html',
  styleUrls: ['./multi-selection.component.scss']
})
export class MultiSelectionComponent implements OnInit {
  @Input() currentQuestion:SurveyQuestion | null=null;

  constructor() { }

  ngOnInit(): void {
  }

}
