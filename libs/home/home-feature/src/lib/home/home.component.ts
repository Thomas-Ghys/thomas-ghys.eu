import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule, PlatformLocation} from '@angular/common';
import {FeatureContainerComponent} from '@thomas-ghys.eu/common-ui';
import {BreakpointDirective} from '@thomas-ghys.eu/common-utils';
import {PersonalInfoStore} from '@thomas-ghys.eu/common-data';

@Component({
	selector: 'lib-home',
	standalone: true,
	imports: [CommonModule, FeatureContainerComponent, BreakpointDirective],
	providers: [
		PersonalInfoStore
	],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
	public store = inject(PersonalInfoStore);

	constructor(private platformLocation: PlatformLocation) {
	}

	getFileName() :string {
		return 'cv_ThomasGhys_' + this.platformLocation.getBaseHrefFromDOM().replace(/\//g, '') + '.pdf';
	}

	getHref() :string {
		return 'public/files/cv_ThomasGhys_' + this.platformLocation.getBaseHrefFromDOM().replace(/\//g, '') + '.pdf';
	}
}
