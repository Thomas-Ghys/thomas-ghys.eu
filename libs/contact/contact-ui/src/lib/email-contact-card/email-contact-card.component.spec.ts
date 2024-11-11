import {ComponentFixture, TestBed} from '@angular/core/testing';
import {EmailContactCardComponent} from './email-contact-card.component';

describe('EmailContactCardComponent', () => {
	let component: EmailContactCardComponent;
	let fixture: ComponentFixture<EmailContactCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [EmailContactCardComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(EmailContactCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
