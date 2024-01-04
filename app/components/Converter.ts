export function hslToHex(h: number, s: number, l: number): string {
	// Ensure h is within the valid range [0, 360]
	h = (h < 0 ? 0 : h > 360 ? 360 : h) % 360;

	// Ensure s and l are within the valid range [0, 100]
	s = s < 0 ? 0 : s > 100 ? 100 : s;
	l = l < 0 ? 0 : l > 100 ? 100 : l;

	// Convert h, s, and l to the range [0, 1]
	h /= 360;
	s /= 100;
	l /= 100;

	// Calculate the RGB values
	const c = (1 - Math.abs(2 * l - 1)) * s;
	const x = c * (1 - Math.abs(((h * 6) % 2) - 1));
	const m = l - c / 2;
	let r = 0,
		g = 0,
		b = 0;

	if (h >= 0 && h < 1) {
		r = c;
		g = x;
		b = 0;
	} else if (h >= 1 && h < 2) {
		r = x;
		g = c;
		b = 0;
	} else if (h >= 2 && h < 3) {
		r = 0;
		g = c;
		b = x;
	} else if (h >= 3 && h < 4) {
		r = 0;
		g = x;
		b = c;
	} else if (h >= 4 && h < 5) {
		r = x;
		g = 0;
		b = c;
	} else if (h >= 5 && h < 6) {
		r = c;
		g = 0;
		b = x;
	}

	// Convert the RGB values to the range [0, 255] and then to hex
	const hexR = Math.round((r + m) * 255)
		.toString(16)
		.padStart(2, "0");
	const hexG = Math.round((g + m) * 255)
		.toString(16)
		.padStart(2, "0");
	const hexB = Math.round((b + m) * 255)
		.toString(16)
		.padStart(2, "0");

	return `#${hexR}${hexG}${hexB}`;
}
