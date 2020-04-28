import { Injectable, Inject } from '@angular/core';
import { SKILL_SERVICE_CONFIG_TOKEN, Skill } from './skills.config';

@Injectable()
export class SkillService {

  constructor(
    @Inject(SKILL_SERVICE_CONFIG_TOKEN) private skillServiceConfig
  ) { }

  getSkills(): Skill[] {
    return this.skillServiceConfig;
  };
}
