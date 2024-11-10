import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class RoutingService {
	constructor(private router: Router) {}

	public navigateToRoute(route: string) {
		this.router.navigate([route]);
	}

	public getCurrentRoute(): string {
		return this.router.url;
	}
}
