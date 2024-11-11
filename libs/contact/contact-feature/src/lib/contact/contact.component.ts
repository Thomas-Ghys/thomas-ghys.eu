import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureContainerComponent} from '@thomas-ghys.eu/common-ui';
import {
	EmailContactCardComponent,
	LinkContactCardComponent,
	QrContactCardComponent
} from '@thomas-ghys.eu/contact-ui';
import {PersonalInfoStore} from '@thomas-ghys.eu/common-data';
import {BreakpointDirective} from '@thomas-ghys.eu/common-utils';

@Component({
	selector: 'lib-contact',
	standalone: true,
	imports: [
		CommonModule,
		FeatureContainerComponent,
		EmailContactCardComponent,
		LinkContactCardComponent,
		QrContactCardComponent,
		BreakpointDirective
	],
	providers: [PersonalInfoStore],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss'
})
export class ContactComponent {
	readonly store = inject(PersonalInfoStore);

	openEmail(email: string) {
		window.location.href = 'mailto:' + email;
	}
}
