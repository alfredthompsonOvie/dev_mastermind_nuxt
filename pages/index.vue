<template>
	<ClientOnly>
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
	</ClientOnly>
</template>

<script setup>
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

useSeoMeta({
	title: "Portfolio",
	description: "The Intuitive Vue Framework.",
});

const homePageCtx = ref(null);
const about = ref(null);

// function animatePage() {
// 	const tl = gsap.timeline();

// 	tl.from(".letter__surname--gsap", {
// 		x: -50,
// 		autoAlpha: 0,
// 		stagger: 0.15,
// 		ease: "expo",
// 	})
// 		.from(".letter__firstname--gsap", {
// 			y: 50,
// 			autoAlpha: 0,
// 			stagger: 0.1,
// 		})
// 		.from(
// 			".profession",
// 			{
// 				x: 50,
// 				autoAlpha: 0,
// 			},
// 			"<0.5"
// 		)
// 		.from(".personal__desc", {
// 			y: 50,
// 			rotateX: -100,
// 			autoAlpha: 0,
// 			transformOrigin: "left",
// 		})
// 		.from(
// 			".cta__container__hero a",
// 			{
// 				y: 50,
// 				autoAlpha: 0,
// 				stagger: 0.2,
// 			},
// 			"<"
// 		)
// 		.from(".social__items a", {
// 			y: 10,
// 			autoAlpha: 0,
// 			stagger: 0.2,
// 		})
// 		.from(
// 			".scroll span",
// 			{
// 				x: 10,
// 				autoAlpha: 0,
// 				stagger: 0.1,
// 			},
// 			"<"
// 		)

// 		.fromTo(
// 			".profile__img__container",
// 			{
// 				autoAlpha: 0.1,
// 				x: -100,
// 			},
// 			{
// 				autoAlpha: 1,
// 				x: 0,
// 				scrollTrigger: {
// 					trigger: ".profile__img__container",
// 					start: "20px 80%",
// 					end: "+=100",
// 					scrub: 1,
// 					// ease: "bounce",
// 					// toggleActions: "play none none none",
// 				},
// 			}
// 		)
// 		.fromTo(
// 			".profile__title",
// 			{
// 				autoAlpha: 0.1,
// 				x: -100,
// 			},
// 			{
// 				autoAlpha: 1,
// 				x: 0,
// 				scrollTrigger: {
// 					trigger: ".profile__title",
// 					start: "20px 80%",
// 					end: "+=100",
// 					scrub: 1,
// 					// toggleActions: "play none none none",
// 				},
// 			}
// 		)
// 		.fromTo(
// 			".profile__text p",
// 			{
// 				autoAlpha: 0.1,
// 				y: 100,
// 				rotateX: -100,
// 			},
// 			{
// 				autoAlpha: 1,
// 				y: 0,
// 				rotateX: 0,
// 				stagger: 0.5,
// 				scrollTrigger: {
// 					trigger: ".profile__text",
// 					start: "20px 80%",
// 					end: "+=100",
// 					scrub: 1,
// 				},
// 			}
// 		)		.fromTo(
// 			".cta__container__about a",

// 			{
// 				y: 50,
// 				autoAlpha: 0,
// 			},
// 			{
// 				y: 0,
// 				autoAlpha: 1,
// 				stagger: 0.2,
// 				scrollTrigger: {
// 					trigger: ".cta__container__about",
// 					start: "20px 80%",
// 					end: "+=100",
// 					scrub: 1,
// 				},
// 			},
// 		);
// 	// .from(".profile__img__container", {
// 	// 	autoAlpha: 0,
// 	// 	xPercent: -10,
// 	// 	ease: "power4",
// 	// 	scrollTrigger: {
// 	// 		trigger: ".profile__img__container",
// 	// 		// start: "20px 80%",
// 	// 		// toggleActions: "restart none none none",
// 	// 		markers: true
// 	// 	},
// 	// });
// 	// .from(
// 	// 	[
// 	// 		".name__surname--gsap",
// 	// 		".name__firstName--gsap",
// 	// 	],
// 	// 	{
// 	// 		x: 50,
// 	// 		autoAlpha: 0,
// 	// 		stagger: 0.2,

// 	// 		scrollTrigger: {
// 	// 			trigger: ".profile__name--gsap",
// 	// 			start: "top 80%",
// 	// 			end: "center center",
// 	// 			// markers: true,
// 	// 			scrub: true,
// 	// 		},
// 	// 	}
// 	// )
// 	// .from(".profile__desc p", {
// 	// 	y: 50,
// 	// 	autoAlpha: 0,
// 	// 	stagger: 0.1,
// 	// 	// ease: "sine",

// 	// 	scrollTrigger: {
// 	// 		trigger: ".profile__desc",
// 	// 		start: "top 80%",
// 	// 		end: "center center",
// 	// 		// markers: true,
// 	// 		scrub: true,
// 	// 	},
// 	// })
// 	// .from(".profile__cta--gsap .btn", {
// 	// 	y: 50,
// 	// 	autoAlpha: 0,
// 	// 	stagger: 0.1,
// 	// 	// ease: "sine",

// 	// 	scrollTrigger: {
// 	// 		trigger: ".profile__cta--gsap",
// 	// 		start: "top 90%",
// 	// 		end: "center 80%",
// 	// 		// markers: true,
// 	// 		scrub: true,
// 	// 	},
// 	// })
// 	// .from(".contact--gsap", {
// 	// 	// y: 50,
// 	// 	autoAlpha: 0,
// 	// 	stagger: 0.2,
// 	// 	// ease: "sine",

// 	// 	scrollTrigger: {
// 	// 		trigger: ".contact__contents",
// 	// 		start: "top 90%",
// 	// 		end: "center 80%",
// 	// 		markers: true,
// 	// 		// scrub: true,
// 	// 		scrub: 1,
// 	// 		toggleActions: "restart none none none",
// 	// 	},
// 	// })
// }

watch(homePageCtx, () => {
	console.log("Home page", homePageCtx.value);
	if (homePageCtx.value) {
		// animatePage();
		console.log(homePageCtx.value)
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
