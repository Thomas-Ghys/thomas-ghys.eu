import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeService } from '@thomas-ghys.eu/theming-utils';
import { Theme } from '@thomas-ghys.eu/theming-data';

@Component({
	selector: 'lib-theme-switcher',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './theme-switcher.component.html',
	styleUrl: './theme-switcher.component.scss',
})
export class ThemeSwitcherComponent {
	public theme: Theme = 'light';

	constructor(private attributeService: AttributeService) {
		// By loading in the component default to the light theme version
		this.attributeService.setAttribute('html', 'data-theme', this.theme);
	}

	// Set the theme to the given parameter
	setTheme(theme: Theme) {
		// Update the local variable
		this.theme = theme;
		// Update the actual attribute with the value
		this.attributeService.setAttribute('html', 'data-theme', theme);
	}
}
