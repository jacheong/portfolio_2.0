import { InjectionToken } from '@angular/core';
import { SkillService } from './skill.service';

export interface Skill {
    name: string;
    info: string;
    path: string;
}

export const SKILL_SERVICE_CONFIG: Skill[] = [
    {
        name: 'Javascript',
        info: '',
        path: 'assets/images/js-logo.png'
    },
    {
        name: 'jQuery',
        info: '',
        path: 'assets/images/jquery-logo.png'
    },
    {
        name: 'Typescript',
        info: '',
        path: 'assets/images/typescript-logo.png'
    },
    {
        name: 'RxJS',
        info: '',
        path: 'assets/images/rxjs-logo.png'
    },
    {
        name: 'HTML5',
        info: '',
        path: 'assets/images/html5-logo.jpg'
    },
    {
        name: 'SASS',
        info: '',
        path: 'assets/images/sass-logo.png'
    },
    {
        name: 'Webpack',
        info: '',
        path: 'assets/images/webpack-logo.png'
    },
    {
        name: 'Angular',
        info: '',
        path: 'assets/images/angular-logo.svg'
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
    },
    {
        name: 'NgRx',
        info: ''
    },
    {
        name: 'Angular Elements',
        info: ''
    }, {
        name: 'PWA',
        info: ''
    },
    {
        name: 'Redux',
        info: ''
    }
];

export const SKILL_SERVICE_CONFIG_TOKEN = new InjectionToken<SkillService>("Skill service injection token");