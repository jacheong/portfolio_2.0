import { InjectionToken } from '@angular/core';
import { SkillService } from './skill.service';

export interface Skill {
	name: string;
	info: string;
    path: string;
    isLarge?: boolean;
}

export const SKILL_SERVICE_CONFIG: Skill[] = [
	{
		name: 'Angular',
		info: '',
        path: 'assets/images/angular-logo.svg',
        isLarge: true,
	},
	{
		name: 'Javascript',
		info: '',
		path: 'assets/images/js-logo.png'
	},
	{
		name: 'SASS',
		info: '',
        path: 'assets/images/sass-logo.svg',
        isLarge: true,
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
        path: 'assets/images/rxjs-logo.svg',
        isLarge: true,
	},
	{
		name: 'HTML5',
		info: '',
		path: 'assets/images/html5-logo.jpg'
	},
	{
		name: 'Webpack',
		info: '',
		path: 'assets/images/webpack-logo.png'
	},
	{
		name: 'Node.js',
		info: '',
		path: 'assets/images/nodejs-logo.png'
	},
	{
		name: 'NgRx',
		info: '',
		path: 'assets/images/ngrx-logo.svg'
	},
	{
		name: 'Angular Elements',
		info: '',
		path: null
	},
	{
		name: 'PWA',
		info: '',
		path: null
	}
];

export const SKILL_SERVICE_CONFIG_TOKEN = new InjectionToken<SkillService>('Skill service injection token');
