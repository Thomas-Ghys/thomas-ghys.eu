import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocaleSwitcherComponent } from '@thomas-ghys.eu/common-ui';
import { ThemeSwitcherComponent } from '@thomas-ghys.eu/theming-ui';

@Component({
	standalone: true,
	imports: [RouterModule, ThemeSwitcherComponent, LocaleSwitcherComponent],
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'public-site';
}
