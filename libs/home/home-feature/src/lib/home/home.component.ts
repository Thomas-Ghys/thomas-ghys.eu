import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureContainerComponent } from '@thomas-ghys.eu/common-ui';

@Component({
	selector: 'lib-home',
	standalone: true,
	imports: [CommonModule, FeatureContainerComponent],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
