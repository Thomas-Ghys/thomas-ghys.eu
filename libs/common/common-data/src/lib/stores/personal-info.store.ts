import { signalStore, withComputed, withState } from '@ngrx/signals';
import { FullName } from '../types/fullName';
import { Adress } from '../types/adress';
import { Age } from '../types/age';
import { computed } from '@angular/core';

type PersonalInfoState = {
	name: FullName;
	address: Adress;
	age: Age;
};

const initialPersonalInfoState: PersonalInfoState = {
	name: {
		firstName: 'Thomas',
		middleName: 'Hendrik Jan',
		lastName: 'Ghys',
	},
	address: {
		street: 'Varenlaan',
		streetNumber: '31',
		city: 'Wilrijk',
		postCode: '2610',
		country: 'Belgium',
	},
	age: {
		birthDate: 15,
		birthMonth: 7,
		birthYear: 1997,
	},
};

export const PersonalInfoStore = signalStore(
	withState(initialPersonalInfoState),
	withComputed(({ name, address, age }) => ({
		age: computed(() => new Date().getFullYear() - age.birthYear()),
		fullName: computed(() => name.firstName() + ' ' + name.lastName()),
	}))
);
