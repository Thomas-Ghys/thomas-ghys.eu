import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationItemComponent} from '../navigation-item/navigation-item.component';
import {PersonalInfoStore} from '@thomas-ghys.eu/common-data';
import {RoutingService} from '@thomas-ghys.eu/common-utils';

@Component({
	selector: 'lib-navigation',
	standalone: true,
	imports: [CommonModule, NavigationItemComponent],
	providers: [PersonalInfoStore],
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
	public store = inject(PersonalInfoStore);

	constructor(private routingService: RoutingService) {}

	navigateToRoute(route: string) {
		this.routingService.navigateToRoute(route);
	}

	currentRoute(): string {
		return this.routingService.getCurrentRoute().split('/')[1];
	}
}
