<template>
	<div class="metronome">
		<div class="tempo">
			<h3>Tempo</h3>
			<div class="tempo-selector">{{ tempo }}</div>
		</div>
		<div class="metre">
			<h3>Metre</h3>
			<div class="metre-selector">
				<div class="beats">
					<b-dropdown aria-role="menu" trap-focus>
						<button class="button is-primary" slot="trigger">
							<span>{{ beats }}</span>
							<b-icon icon="menu-down"></b-icon>
						</button>

						<b-dropdown-item
							aria-role="menu-item"
							:focusable="false"
							custom
							paddingless
						>
							<form action="">
								<div class="modal-card" style="width:300px;">
									<section class="modal-card-body">
										<b-field>
											<b-numberinput
												v-model="beats"
											></b-numberinput>
										</b-field>
									</section>
								</div>
							</form>
						</b-dropdown-item>
					</b-dropdown>
				</div>
				<div class="barLength">
					<b-dropdown aria-role="list" v-model="barLength">
						<button class="button is-primary" slot="trigger">
							<span>{{ barLength }}</span>
							<b-icon icon="menu-down"></b-icon>
						</button>

						<b-dropdown-item value="2" aria-role="listitem">
							2
						</b-dropdown-item>

						<b-dropdown-item value="3" aria-role="listitem">
							3
						</b-dropdown-item>

						<b-dropdown-item value="4" aria-role="listitem">
							4
						</b-dropdown-item>
						<b-dropdown-item value="8" aria-role="listitem">
							8
						</b-dropdown-item>

						<b-dropdown-item value="16" aria-role="listitem">
							16
						</b-dropdown-item>
					</b-dropdown>
				</div>
			</div>
		</div>
	</div></template
>

<script lang="ts">
export default {
	data: () => ({
		tempo: 120,
		beats: 4,
		barLength: 4,
	}),
};
</script>
