<template>
	<footer>
		<section class="footer__contents" ref="footer">
			<Brand />
			<ul class="nav__list nav__list--footer">
				<li>
					<NuxtLink to="/#about" class="footerNav__link">About me</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/portfolio" class="footerNav__link">Portfolio</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/contact" class="footerNav__link">Contact Me</NuxtLink>
				</li>
			</ul>
			<!-- <ul class="social__list social__list--footer">
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
			</ul> -->

			<SocialLinks page="footer" />
		</section>
	</footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
	background-color: var(--secondary);
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	grid-template-rows: auto;
}
.footer__contents {
	grid-column: 2;
	grid-row: 1;
	padding: 2em 0;
	text-align: center;
}
.footer__contents > * {
	margin-top: 1.5em;
}
.branding__footer {
	transition: transform 0.3s linear;
	filter: invert(1) brightness(2);
}
.branding__footer:hover {
	filter: invert(0.9) sepia(1) saturate(10) invert(1) hue-rotate(80deg);
	transform: translateY(-2px) scale(1.2) rotate(12deg);
}

.social__list {
	filter: invert(1) brightness(2);
}
.nav__list {
	margin-top: 0.8em;
}
.footerNav__link {
	color: var(--text);
	transition: all 0.3s ease;
	padding: 0.5em 1em;
	display: inline-block;
}
.footerNav__link:hover {
	color: var(--accent);
}

@media (min-width: 760px) {
	.footer__contents {
		padding: 2.5em 0;
		
	}
	.footer__contents > * {
		margin-top: 0;
	}
	.footer__contents,
	.nav__list {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 1.5em;
	}

	.nav__list {
		gap: 1em;
		a {
			transition: all 0.3s linear;
		}

	}

}
</style>
