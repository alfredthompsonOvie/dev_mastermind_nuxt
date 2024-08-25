<template>
	<div class="layout">
		<ClientOnly>
			<AppHeader />
			<slot />
			<AppFooter />

		</ClientOnly>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.layout {
	max-width: 1440px;
	margin-inline: auto;
	position: relative;
}
</style>
