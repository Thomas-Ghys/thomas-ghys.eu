import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'lib-link-contact-card',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './link-contact-card.component.html',
	styleUrl: './link-contact-card.component.scss'
})
export class LinkContactCardComponent {
	@Input({required: true}) linkIcon = '';
	@Input({required: true}) linkText = '';
	@Input({required: true}) linkTitle = '';
	@Output() concactCardClicked: EventEmitter<void> = new EventEmitter();
}
