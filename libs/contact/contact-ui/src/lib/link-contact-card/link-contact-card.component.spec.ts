import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LinkContactCardComponent} from './link-contact-card.component';

describe('LinkContactCardComponent', () => {
	let component: LinkContactCardComponent;
	let fixture: ComponentFixture<LinkContactCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LinkContactCardComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(LinkContactCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
