import {Component} from '@angular/core';
import {CommonModule, PlatformLocation} from '@angular/common';

@Component({
	selector: 'lib-download-cv',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './download-cv.component.html',
	styleUrl: './download-cv.component.scss'
})
export class DownloadCvComponent {
	private cv = '';

	constructor(private platformLocation: PlatformLocation) {
		this.cv =
			'cv_ThomasGhys_' +
			this.platformLocation.getBaseHrefFromDOM().replace(/\//g, '') +
			'.pdf';
	}

	getFileName(): string {
		return this.cv;
	}

	getHref(): string {
		return 'public/files/' + this.cv;
	}
}
