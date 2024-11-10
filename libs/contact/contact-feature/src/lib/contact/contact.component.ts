import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureContainerComponent} from '@thomas-ghys.eu/common-ui';

@Component({
	selector: 'lib-contact',
	standalone: true,
	imports: [CommonModule, FeatureContainerComponent],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss'
})
export class ContactComponent {}
