"use strict";

/**
 * Get new advice
 * @returns {Promise} Promise object represents new advice
 */
export async function getNewAdvice(url) {
	// Check this documentation to solve cache problems on FireFox Browser
	// https://developer.mozilla.org/en-US/docs/Web/API/Request/cache
	let advice = await fetch(url, {
		cache: "reload",
	});
	advice = (await advice.ok) ? advice.json() : Promise.reject("Fetch failed");
	return advice;
}
