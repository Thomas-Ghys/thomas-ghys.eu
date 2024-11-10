import {Route} from '@angular/router';
import {Page404Component} from '@thomas-ghys.eu/common-ui';

export const appRoutes: Route[] = [
	{
		path: 'home',
		loadChildren: () => import('@thomas-ghys.eu/home-feature').then(
			(route) => route.homeRoutes
		)
	},
	{
		path: 'contact',
		loadChildren: () => import('@thomas-ghys.eu/contact-feature').then(
			(route) => route.contactRoutes
		)
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: '**',
		component: Page404Component
	}
];
