import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule, PlatformLocation} from '@angular/common';
import {FeatureContainerComponent} from '@thomas-ghys.eu/common-ui';
import {BreakpointDirective} from '@thomas-ghys.eu/common-utils';
import {PersonalInfoStore} from '@thomas-ghys.eu/common-data';

@Component({
	selector: 'lib-home',
	standalone: true,
	imports: [CommonModule, FeatureContainerComponent, BreakpointDirective],
	providers: [PersonalInfoStore],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
	private cv = '';
	public store = inject(PersonalInfoStore);

	constructor(private platformLocation: PlatformLocation) {
		this.cv =
			'cv_ThomasGhys_' +
			this.platformLocation.getBaseHrefFromDOM().replace(/\//g, '') +
			'.pdf';
	}

	getFileName(): string {
		return this.cv;
	}

	getHref(): string {
		return 'public/files/' + this.cv;
	}
}
