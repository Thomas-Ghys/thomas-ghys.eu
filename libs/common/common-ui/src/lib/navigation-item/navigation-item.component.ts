import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreakpointDirective} from '@thomas-ghys.eu/common-utils';

@Component({
	selector: 'lib-navigation-item',
	standalone: true,
	imports: [CommonModule, BreakpointDirective],
	templateUrl: './navigation-item.component.html',
	styleUrl: './navigation-item.component.scss'
})
export class NavigationItemComponent {
	@Input({required: true}) navigationItemName = '';
	@Input({required: true}) navigationItemIcon = '';
	@Input({required: true}) navigationItemActive = false;
	@Output() navigationItemClicked: EventEmitter<boolean> = new EventEmitter();
}
