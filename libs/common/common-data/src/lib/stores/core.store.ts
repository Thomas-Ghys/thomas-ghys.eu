import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {Language} from '../types/language';

type CoreState = {
	applicationLanguage: Language;
};

const initialCoreState: CoreState = {
	applicationLanguage: 'en'
};

export const CoreStore = signalStore(
	withState(initialCoreState),
	withMethods((store) => ({
		updateLanguage(language: Language): void {
			patchState(store, (state) => ({
				...state,
				applicationLanguage: language
			}));
		}
	}))
);
