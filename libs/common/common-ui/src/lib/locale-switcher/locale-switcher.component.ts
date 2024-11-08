import {
	ChangeDetectionStrategy,
	Component,
	inject,
	OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { CoreStore, Language } from '@thomas-ghys.eu/common-data';

@Component({
	selector: 'lib-locale-switcher',
	standalone: true,
	imports: [CommonModule, OverlayModule],
	providers: [CoreStore],
	templateUrl: './locale-switcher.component.html',
	styleUrl: './locale-switcher.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocaleSwitcherComponent implements OnInit {
	public locale: string = '';
	public localeSwitcherMenuState: boolean = false;
	private store = inject(CoreStore);

	ngOnInit(): void {
		this.locale = window.location.href;
	}

	switchLocale(language: Language) {
		window.location.href = `/${language}`;
		this.store.updateLanguage(language);
	}
}
