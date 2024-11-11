import {ComponentFixture, TestBed} from '@angular/core/testing';
import {QrContactCardComponent} from './qr-contact-card.component';

describe('QrContactCardComponent', () => {
	let component: QrContactCardComponent;
	let fixture: ComponentFixture<QrContactCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [QrContactCardComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(QrContactCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
