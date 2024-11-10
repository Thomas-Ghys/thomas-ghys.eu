import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureContainerComponent} from '@thomas-ghys.eu/common-ui';
import {BreakpointDirective} from '@thomas-ghys.eu/common-utils';
import {PersonalInfoStore} from '@thomas-ghys.eu/common-data';
import {DownloadCvComponent} from '@thomas-ghys.eu/home-ui';

@Component({
	selector: 'lib-home',
	standalone: true,
	imports: [
		CommonModule,
		FeatureContainerComponent,
		BreakpointDirective,
		DownloadCvComponent
	],
	providers: [PersonalInfoStore],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
	readonly store = inject(PersonalInfoStore);
}
