import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureContainerComponent } from '@thomas-ghys.eu/common-ui';
import { BreakpointDirective } from '@thomas-ghys.eu/common-utils';

@Component({
	selector: 'lib-home',
	standalone: true,
	imports: [CommonModule, FeatureContainerComponent, BreakpointDirective],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
