import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { MatListModule } from '@angular/material/list';
import { SkillComponent } from './components/skill/skill.component';
import { SkillInfoCardComponent } from './components/skill-info-card/skill-info-card.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SkillsComponent,
    SkillComponent,
    SkillInfoCardComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    SkillsComponent,
    SkillComponent,
    SkillInfoCardComponent
  ]
})
export class SkillsModule { }
