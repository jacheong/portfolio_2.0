import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../services/skills.config';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() skill: Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
