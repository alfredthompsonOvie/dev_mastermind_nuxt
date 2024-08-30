<template>
	<NuxtLink to="/" class="brand">
		<!-- ovie -->
		<NuxtImg src="/logo2.png" alt="logo" />
	</NuxtLink>
</template>

<script setup></script>

<style lang="scss" scoped>
.brand {
	line-height: 0;
}
.brand:hover {
	color: var(--accent);
}
.brand img {
	width: 2.8em;
  object-fit: contain;
}
</style>
