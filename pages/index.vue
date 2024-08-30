<template>
	<section class="container" ref="homePageCtx">
		<section class="hero section" id="hero">
			<section class="content">
				<Hero />
			</section>
		</section>
		<section class="about section" id="about" ref="about">
			<section class="content">
				<AboutMe />
			</section>
		</section>
		<Info />
	</section>
</template>

<script setup>
import { gsap } from "gsap";


useSeoMeta({
	title: "Home | Alfred Thompson Ovie",
	description: "Alfred Thompson Ovie is a developer, who loves working with javaScript and its frameworks to craft impactful web applications.",
});

const homePageCtx = ref(null);
const about = ref(null);

function animatePage() {
	const tl = gsap.timeline();

	tl.from(".letter__surname--gsap", {
		x: -50,
		autoAlpha: 0,
		stagger: 0.15,
		ease: "expo",
	})
		.from(".letter__firstname--gsap", {
			y: 50,
			autoAlpha: 0,
			stagger: 0.1,
		})
		.from(
			".profession",
			{
				x: 50,
				autoAlpha: 0,
			},
			"<0.5"
		)
		.from(".personal__desc", {
			y: 50,
			rotateX: -100,
			autoAlpha: 0,
			transformOrigin: "left",
		})
		.from(
			".cta__container__hero a",
			{
				y: 50,
				autoAlpha: 0,
				stagger: 0.2,
			},
			"<"
		)
		.fromTo(".hero.socials .social__items a", {
			y: 10,
			autoAlpha: 0,
			stagger: 0.2,
		}, {
			y: 0,
			autoAlpha: 1,
			stagger: 0.2,
			onComplete: () => {
				gsap.killTweensOf(".hero.socials .social__items a")
			}
		})
		.from(
			".scroll span",
			{
				x: 10,
				autoAlpha: 0,
				stagger: 0.1,
			},
			"<"
		)


}

watch(homePageCtx, () => {
	console.log("Home page", homePageCtx.value);
	if (homePageCtx.value) {
		animatePage();
	}
});
</script>

<style lang="scss" scoped>
.container {
	color: var(--text);
}
.section {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
.content {
	width: 100%;
	height: 100%;
	padding-top: 3.5em;
}
</style>
