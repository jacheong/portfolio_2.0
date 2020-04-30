import { InjectionToken } from '@angular/core';
import { SkillService } from './skill.service';

export interface Skill {
	name: string;
	info: string;
    path: string;
	isFavorite?: boolean;
	experience: string;
}

export const SKILL_SERVICE_CONFIG: Skill[] = [
	{
		name: 'Angular',
		info: '',
        path: 'assets/images/angular-logo.svg',
		isFavorite: true,
		experience: '3+ yrs'
	},
	{
		name: 'Javascript',
		info: '',
		path: 'assets/images/js-logo.png',
		experience: '3+ yrs'
	},
	{
		name: 'SASS',
		info: '',
        path: 'assets/images/sass-logo.svg',
		isFavorite: true,
		experience: '3+ yrs'
	},
	{
		name: 'jQuery',
		info: '',
		path: 'assets/images/jquery-logo.png',
		experience: '3+ yrs'
	},
	{
		name: 'Typescript',
		info: '',
		path: 'assets/images/typescript-logo.png',
		experience: '3+ yrs'
	},
	{
		name: 'RxJS',
		info: '',
        path: 'assets/images/rxjs-logo.svg',
		isFavorite: true,
		experience: '3+ yrs'
	},
	{
		name: 'HTML5',
		info: '',
		path: 'assets/images/html5-logo.jpg',
		experience: '5+ yrs'
	},
	{
		name: 'Webpack',
		info: '',
		path: 'assets/images/webpack-logo.png',
		experience: '1+ yrs'
	},
	{
		name: 'Node.js',
		info: '',
		path: 'assets/images/nodejs-logo.png',
		experience: '1+ yrs'
	},
	{
		name: 'NgRx',
		info: '',
		path: 'assets/images/ngrx-logo.svg',
		experience: '1+ yrs'
	},
	{
		name: 'Angular Elements',
		info: '',
		path: 'assets/images/angular-logo.svg',
		isFavorite: true,
		experience: '1+ yrs'
	},
	{
		name: 'PWA',
		info: '',
		path: 'assets/images/angular-logo.svg',
		experience: '2+ yrs'
	}
];

export const SKILL_SERVICE_CONFIG_TOKEN = new InjectionToken<SkillService>('Skill service injection token');
