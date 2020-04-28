import { InjectionToken } from '@angular/core';
import { SkillService } from './skill.service';

interface Skill {
    name: string;
    info: string;
}

export const SKILL_SERVICE_CONFIG: Skill[] = [
    {
        name: 'Javascript',
        info: ''
    },
    {
        name: 'jQuery',
        info: ''
    },
    {
        name: 'Typescript',
        info: ''
    },
    {
        name: 'RxJS',
        info: ''
    },
    {
        name: 'HTML5',
        info: ''
    },
    {
        name: 'SCSS',
        info: ''
    },
    {
        name: 'Webpack',
        info: ''
    },
    {
        name: 'Angular',
        info: ''
    },
    {
        name: 'Javascript',
        info: ''
    },
    {
        name: 'Node.js',
        info: ''
    },
    {
        name: 'Express',
        info: ''
    }
];

export const SKILL_SERVICE_CONFIG_TOKEN = new InjectionToken<SkillService>("Skill service injection token");