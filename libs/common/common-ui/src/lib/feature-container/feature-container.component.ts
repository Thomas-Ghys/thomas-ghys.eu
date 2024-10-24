import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'lib-feature-container',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './feature-container.component.html',
	styleUrl: './feature-container.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureContainerComponent {
	@Input({ required: true }) public featureName: string = '';
}
