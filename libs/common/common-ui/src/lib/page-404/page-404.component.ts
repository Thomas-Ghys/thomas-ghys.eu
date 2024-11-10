import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureContainerComponent} from '../feature-container/feature-container.component';
import {RoutingService} from '@thomas-ghys.eu/common-utils';

@Component({
	selector: 'lib-page-404',
	standalone: true,
	imports: [CommonModule, FeatureContainerComponent],
	templateUrl: './page-404.component.html',
	styleUrl: './page-404.component.scss'
})
export class Page404Component {
	constructor(private routingService: RoutingService) {}

	navigateToRoute(route: string) {
		this.routingService.navigateToRoute(route);
	}
}
