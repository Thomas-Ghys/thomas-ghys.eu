import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TopBarComponent} from '@thomas-ghys.eu/common-ui';

@Component({
	standalone: true,
	imports: [RouterModule, TopBarComponent],
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'public-site';
}
