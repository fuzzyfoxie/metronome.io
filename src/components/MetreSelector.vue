<template>
	<div class="metre">
		<h3>Metre</h3>
		<div class="metre-selector">
			<b-dropdown aria-role="menu" trap-focus>
				<button class="button is-primary" slot="trigger">
					<div class="metre-display">
						<span>{{ beats }}</span>
						<span>{{ barLength}}</span>
					</div>

					<b-icon icon="menu-down"></b-icon>
				</button>

				<b-dropdown-item aria-role="menu-item" :focusable="false" custom paddingless>
					<div class="modal-card" style="width:300px;">
						<section class="modal-card-body">
							<b-field label="Beats">
								<b-numberinput v-model="beats" min="1" max="32"></b-numberinput>
							</b-field>
						</section>
					</div>

					<b-field label="Bar Length">
						<p class="control" v-for="val in [2, 4, 8, 16]" v-bind:key="val">
							<button class="button">{{ val }}</button>
						</p>
					</b-field>
				</b-dropdown-item>
			</b-dropdown>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({ beats: 4, barLength: 4 }),
};
</script>

<style lang="less">
.metre-display {
	display: flex;
	flex-direction: column;
}

.metre-selector {
	.button {
		height: auto;
	}
}
</style>