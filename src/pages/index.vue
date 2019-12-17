<template>
	<div class="metronome">
		<metre-selector />
		<tempo-selector />
	</div>
</template>

<script lang="ts">
import MetreSelector from "../components/MetreSelector.vue";
import TempoSelector from "../components/TempoSelector.vue";

export default {
	data: () => ({
		tempo: 120,
		beats: 4,
		barLength: 4,
	}),
	components: { MetreSelector, TempoSelector },
};
</script>
