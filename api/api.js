"use strict";

/**
 * Get new advice
 * @returns {Promise} Promise object represents new advice
 */
export async function getNewAdvice(url) {
	let advice = await fetch(url, {
		cache: "reload",
	});
	advice = (await advice.ok) ? advice.json() : Promise.reject("Fetch failed");
	return advice;
}
