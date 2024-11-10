import {signalStore, withComputed, withState} from '@ngrx/signals';
import {FullName} from '../types/fullName';
import {Adress} from '../types/adress';
import {Age} from '../types/age';
import {computed} from '@angular/core';
import {Contact} from '../types/contact';

export type PersonalInfoState = {
	name: FullName;
	address: Adress;
	age: Age;
	contact: Contact;
};

const initialPersonalInfoState: PersonalInfoState = {
	name: {
		firstName: 'Thomas',
		middleName: 'Hendrik Jan',
		lastName: 'Ghys'
	},
	address: {
		street: 'Varenlaan',
		streetNumber: '31',
		city: 'Wilrijk',
		postCode: '2610',
		country: 'Belgium'
	},
	age: {
		birthDate: 15,
		birthMonth: 7,
		birthYear: 1997
	},
	contact: {
		email: 'thomas-ghys@outlook.com',
		phone: '+32 484 496 411',
		github: 'https://github.com/Thomas-Ghys?tab=repositories',
		linkedin: 'https://www.linkedin.com/in/thomas-ghys-699a9b209/',
		line: 'kacha1660'
	}
};

export const PersonalInfoStore = signalStore(
	withState(initialPersonalInfoState),
	withComputed(({name, age}) => ({
		age: computed(() => new Date().getFullYear() - age.birthYear()),
		fullName: computed(() => name.firstName() + ' ' + name.lastName())
	}))
);
