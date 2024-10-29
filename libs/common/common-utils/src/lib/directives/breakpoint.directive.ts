import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import {
	BreakpointObserver,
	Breakpoints,
	BreakpointState,
} from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';

@Directive({
	selector: '[Breakpoint]',
	standalone: true,
})
export class BreakpointDirective implements OnInit, OnDestroy {
	private computationalBreakpoints: string[] = [
		'XSmall',
		'Small',
		'Medium',
		'Large',
		'XLarge',
	];
	private onDestroy$ = new Subject<boolean>();

	constructor(
		private breakpointObserver: BreakpointObserver,
		public element: ElementRef
	) {}

	ngOnInit(): void {
		this.breakpointObserver
			.observe([
				Breakpoints.XSmall,
				Breakpoints.Small,
				Breakpoints.Medium,
				Breakpoints.Large,
				Breakpoints.XLarge,
			])
			.pipe(takeUntil(this.onDestroy$))
			.subscribe((state: BreakpointState) => {
				Object.entries(Breakpoints).forEach(
					([breakpoint, breakpointState]: [string, string]) => {
						this.updateClassList(breakpoint, state);

						this.computationalBreakpoints.forEach(
							(computationalBreakpoint: string) => {
								if (
									state.breakpoints[
										Breakpoints[
											breakpoint as keyof typeof Breakpoints
										]
									]
								) {
								}
							}
						);
					}
				);

				this.updateComputationalClassList(state);
			});
	}

	ngOnDestroy(): void {
		this.onDestroy$.next(true);
		this.onDestroy$.complete();
	}

	private updateClassList(
		breakpoint: string,
		breakpointState: BreakpointState
	) {
		if (
			breakpointState.breakpoints[
				Breakpoints[breakpoint as keyof typeof Breakpoints]
			]
		) {
			this.element.nativeElement.classList.add(
				`breakpoint-${breakpoint.toLowerCase()}`
			);
		} else if (
			breakpointState.breakpoints[
				Breakpoints[breakpoint as keyof typeof Breakpoints]
			]
		) {
			this.element.nativeElement.classList.remove(
				`breakpoint-${breakpoint.toLowerCase()}`
			);
		}
	}

	private updateComputationalClassList(breakpointState: BreakpointState) {
		this.computationalBreakpoints.forEach((breakpoint: string) => {
			if (
				breakpointState.breakpoints[
					Breakpoints[breakpoint as keyof typeof Breakpoints]
				]
			) {
				this.matchComputationalClasses(
					this.computationalBreakpoints.indexOf(breakpoint)
				);
			}
		});
	}

	private matchComputationalClasses(indexOfActiveBreakpoint: number) {
		this.computationalBreakpoints.forEach((breakpoint: string) => {
			if (
				indexOfActiveBreakpoint >
				this.computationalBreakpoints.indexOf(breakpoint)
			) {
				this.element.nativeElement.classList.add(
					`breakpoint-larger-than-${breakpoint.toLowerCase()}`
				);
			} else {
				this.element.nativeElement.classList.remove(
					`breakpoint-larger-than-${breakpoint.toLowerCase()}`
				);
			}

			if (
				indexOfActiveBreakpoint <
				this.computationalBreakpoints.indexOf(breakpoint)
			) {
				this.element.nativeElement.classList.add(
					`breakpoint-smaller-than-${breakpoint.toLowerCase()}`
				);
			} else {
				this.element.nativeElement.classList.remove(
					`breakpoint-smaller-than-${breakpoint.toLowerCase()}`
				);
			}
		});
	}
}
