import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/services/skills.config';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];

  constructor(
    private skillService: SkillService
  ) { }

  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
  }

}
