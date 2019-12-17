export let deltaTicks: number[] = [];
export let lastTick: number = 0;
export let approximateBPM: number = 0;

/**
 * Trigger a tick for approximating BPM.
 */
export const tick = () => {
	if (lastTick != 0) {
		deltaTicks.push(Date.now() - lastTick);
	}

	if (deltaTicks.length > 2) {
		const avg =
			deltaTicks.reduce((prev, curr) => prev + curr, 0) /
			deltaTicks.length;

		console.log(avg);

		approximateBPM = Math.round(60 / avg);
	}

	lastTick = Date.now();
};
