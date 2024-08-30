<template>
	<section
		class="socials"
		:class="{ hero: page === 'hero', footer: page === 'footer' }"
	>
		<ul class="social__list">
			<li class="social__items">
				<NuxtLink to="https://github.com/alfredthompsonOvie">
					<Icon name="brandico:github" />
				</NuxtLink>
			</li>
			<li class="social__items">
				<NuxtLink to="https://www.linkedin.com/in/alfredthompsonovie/">
					<Icon name="brandico:linkedin-rect" />
				</NuxtLink>
			</li>
			<li class="social__items">
				<NuxtLink to="mailto://alfredthompsonovie.com">
					<Icon name="bi:envelope-exclamation-fill" />
				</NuxtLink>
			</li>
		</ul>
	</section>
</template>

<script setup>
defineProps({
	page: {
		type: String,
	},
});
</script>

<style lang="scss" scoped>
.socials.hero {
	grid-column: 1;
	grid-row: 3;
	justify-self: start;
	align-self: flex-end;
}
.social__list {
	display: flex;
	gap: 1em;
}
.social__list a {
	color: var(--text);
}
.social__items {
	transition: all 0.2s linear;
}
.social__items:hover {
	transform: scale(1.5);
}
/* 
@media (min-width: 400px) {
	.socials {
		/* grid-column: 1;
		grid-row: 2; 
    grid-column: 1;
    grid-row: 3;
		justify-self: start;
		align-self: flex-end;
	}
	.social__list {
		/* flex-direction: column; 
	}
} */

/* footer */

.footer .social__list {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1em;
	transition: all 0.3s ease;
}
.footer .social__list a {
	transition: all 0.3s ease;
	display: inline-flex;
}
/* github */
.footer .social__list li:nth-child(1) a:hover {
	transform: translateY(-2px) scale(1.5);
}
/* twitter */
.footer .social__list li:nth-child(2) a:hover {
	transform: translateY(-2px) scale(1.3) rotate(-12deg);
}
/* linkedin */
.footer .social__list li:nth-child(3) a:hover {
	transform: translateY(-2px) scale(1.5) rotate(8deg);
}

@media (min-width: 760px) {
	.footer.socials {
		margin-left: auto;
	}
}
@media (min-width: 820px) {
	.socials.hero {
    position: absolute;
    bottom: 0em;
    left: 2.5em;
	}
  .hero .social__list {
    flex-direction: column;
  }

}
</style>
