import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaleSwitcherComponent } from '../locale-switcher/locale-switcher.component';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { RoutingService } from '@thomas-ghys.eu/common-utils';

@Component({
	selector: 'lib-top-bar',
	standalone: true,
	imports: [CommonModule, LocaleSwitcherComponent, ThemeSwitcherComponent],
	templateUrl: './top-bar.component.html',
	styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
	constructor(private routingService: RoutingService) {}

	public navigateToHome() {
		this.routingService.navigateToRoute('home');
	}
}
