<template>
	<main>
		<header>
			<nav class="navbar" role="navigation" aria-label="main navigation">
				<div class="navbar-brand">
					<a class="navbar-item" href="/">
						metronome
					</a>
				</div>
			</nav>
		</header>
		<section class="content">
			<nuxt />
		</section>
	</main>
</template>

<style lang="less">
.navbar {
	display: flex;
	align-items: center;

	background-color: #333;
	box-shadow: 0 0 5px 0 #111;

	min-height: 4rem;
	font-size: 1.5rem;

	@media (max-width: 800px) {
		justify-content: center;
	}
}

.content {
	padding: 4rem;
}
</style>
