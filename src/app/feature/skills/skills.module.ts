import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { MatListModule } from '@angular/material/list';
import { SkillComponent } from './components/skill/skill.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SkillsComponent,
    SkillComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    SkillsComponent,
    SkillComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SkillsModule { }
