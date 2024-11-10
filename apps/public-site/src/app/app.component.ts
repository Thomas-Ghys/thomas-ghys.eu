import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
	NavigationComponent,
	TopBarComponent
} from '@thomas-ghys.eu/common-ui';
import {BreakpointDirective} from '@thomas-ghys.eu/common-utils';

@Component({
	standalone: true,
	imports: [
		RouterModule,
		TopBarComponent,
		NavigationComponent,
		BreakpointDirective
	],
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'public-site';
}
