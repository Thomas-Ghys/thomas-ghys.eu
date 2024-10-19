import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeSwitcherComponent } from '@thomas-ghys.eu/theming-ui';

@Component({
	standalone: true,
	imports: [RouterModule, ThemeSwitcherComponent],
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'public-site';
}
