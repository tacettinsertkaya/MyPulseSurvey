import { Component, Input, OnInit } from '@angular/core';
import { SurveyQuestion } from 'src/app/models/entity/survey/survey-question';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() currentQuestion:SurveyQuestion | null=null;

  constructor() { }

  ngOnInit(): void {
  }

}
