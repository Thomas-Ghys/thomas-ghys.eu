import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkConnectedOverlay, CdkOverlayOrigin} from '@angular/cdk/overlay';
import {BreakpointDirective} from '@thomas-ghys.eu/common-utils';

@Component({
	selector: 'lib-qr-contact-card',
	standalone: true,
	imports: [
		CommonModule,
		CdkOverlayOrigin,
		BreakpointDirective,
		CdkConnectedOverlay
	],
	templateUrl: './qr-contact-card.component.html',
	styleUrl: './qr-contact-card.component.scss'
})
export class QrContactCardComponent {
	@Input({required: true}) qrLogo = '';
	@Input({required: true}) qrTitle = '';
	@Input() qrPrefix = '';
	@Input() qrExtraDetail = '';
	@Input({required: true}) qrCode = '';

	protected fullscreenQrCodeIsOpen = false;
	protected fullscreenQRCode!: CdkOverlayOrigin;

	toggleOverlay(trigger: CdkOverlayOrigin) {
		this.fullscreenQRCode = trigger;
		this.fullscreenQrCodeIsOpen = !this.fullscreenQrCodeIsOpen;
	}

	closeOverlay() {
		this.fullscreenQrCodeIsOpen = !this.fullscreenQrCodeIsOpen;
	}
}
