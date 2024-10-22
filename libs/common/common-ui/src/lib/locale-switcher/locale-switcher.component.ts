import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
	selector: 'lib-locale-switcher',
	standalone: true,
	imports: [CommonModule, OverlayModule],
	templateUrl: './locale-switcher.component.html',
	styleUrl: './locale-switcher.component.scss',
})
export class LocaleSwitcherComponent implements OnInit {
	public locale: string = '';
	public localeSwitcherMenuState: boolean = false;

	ngOnInit(): void {
		this.locale = window.location.href;
	}

	switchLocale(language: string) {
		window.location.href = `/${language}`;
	}
}
