<template>
	<div class="tempo">
		<h3>Tempo</h3>
		<b-dropdown aria-role="list" v-model="tempo">
			<button class="button is-primary" slot="trigger">
				<span>{{ tempo }}</span>
				<b-icon icon="menu-down"></b-icon>
			</button>

			<b-dropdown-item aria-role="menu-item" :focusable="false" custom paddingless>
				<div class="modal-card" style="width:300px;">
					<section class="modal-card-body">
						<b-field label="Select Tempo">
							<b-slider size="is-medium" :min="20" :max="300" v-model="tempo">
								<template v-for="val in [20, 300]">
									<b-slider-tick :value="val" :key="val">{{ val }}</b-slider-tick>
								</template>
							</b-slider>
						</b-field>
						<button class="button is-primary" v-on:click="handleAutoTempo">{{ tempoTap }}</button>
					</section>
				</div>
			</b-dropdown-item>
		</b-dropdown>
	</div>
</template>

<script>
import { tick, approximateBPM } from "../packages/metronome";
export default {
	data: () => ({
		tempo: 120,
		tempoTap: "TAP",
	}),

	methods: {
		handleAutoTempo: function() {
			tick();
			console.log("Tick!");

			if (approximateBPM) {
				console.log(approximateBPM);
				this.tempo = approximateBPM;
			}
		},
	},
};
</script>

<style>
</style>