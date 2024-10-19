import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class AttributeService {
	/**
	 * Sets an attribute on a specified html element
	 * @param elementTag - The HTML element you want to add an attribute to
	 * @param attribute - The name of the attribute you want to add or change
	 * @param attributeValue - The actual value of the attribute
	 */
	setAttribute(
		elementTag: string,
		attribute: string,
		attributeValue: string
	) {
		// Searches for the given element by tag (if multiple are found always pick the first one)
		const htmlElement: Element =
			document.getElementsByTagName(elementTag)[0];

		// Add the attribute to the HTML element
		htmlElement.setAttribute(attribute, attributeValue);
	}
}
