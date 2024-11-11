import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'lib-email-contact-card',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './email-contact-card.component.html',
	styleUrl: './email-contact-card.component.scss'
})
export class EmailContactCardComponent {
	@Input({required: true}) email = '';
	@Output() concactCardClicked: EventEmitter<void> = new EventEmitter();
}
