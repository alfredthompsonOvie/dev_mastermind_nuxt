<template>
	<main class="grid">
		<section class="grid__contents">
			<TransitionGroup
				appear
				name="fade"
				@before-enter="beforeEnter"
				@enter="enter"
				:css="false"
			>
				<template v-for="project in projects" :key="project.title">
					<section
						v-show="portfolioDetails === joinWordWitHyphen(project.title)"
					>
						<div class="project__banner">
							<img
								:src="`${getImageUrl(project.heroImage)}`"
								:alt="`${project.title} site preview`"
							/>
						</div>
						<div class="project__contents">
							<div class="project__info">
								<h1 class="heading">
									{{ capitalizeTitle(project.title) }}
								</h1>
								<p class="description">{{ project.description }}</p>

								<div class="category">
									<p v-for="category in project.category" :key="category">
										{{ category }}
									</p>
								</div>
								<NuxtLink :to="project.linkUrl" class="cta cta__sec">
									{{ project.linkContent }}
								</NuxtLink>
							</div>

							<div class="project__background">
								<h1 class="subHeading">
									{{ project.background.title }}
								</h1>
								<p class="description">
									{{ project.background.description }}
								</p>
								<h1 class="subHeading">{{ project.background.subHeading }}</h1>

								<div class="imgPreview__container">
									<img
										:src="`${getImageUrl(project.background.previewImage_one)}`"
										:alt="`${project.title} desktop site preview`"
									/>
									<img
										:src="`${getImageUrl(project.background.previewImage_two)}`"
										:alt="`${project.title} mobile site preview`"
									/>
								</div>
							</div>
						</div>
						<div class="navigation">
							<NuxtLink
								:to="`/portfolio/${joinWordWitHyphen(project.previousProject)}`"
								class="navigation__btn navigation__btn--left"
							>
								<img
									class="btn__content--arrow"
									src="@/assets/images/icons/arrow-left.svg"
									alt=""
								/>
								<span class="btn__content btn__content--left">
									<span class="btn__content--primary">{{
										splitWord(project.previousProject)
									}}</span>
									<span class="btn__content--sec"> Previous Project </span>
								</span>
							</NuxtLink>

							<NuxtLink
								:to="`/portfolio/${joinWordWitHyphen(project.nextProject)}`"
								class="navigation__btn navigation__btn--right"
							>
								<img
									class="btn__content--arrow"
									src="@/assets/images/icons/arrow-right.svg"
									alt=""
								/>

								<span class="btn__content btn__content--right">
									<span class="btn__content--primary">{{
										splitWord(project.nextProject)
									}}</span>
									<span class="btn__content--sec"> Next Project </span>
								</span>
							</NuxtLink>
						</div>
					</section>
				</template>
			</TransitionGroup>
		</section>
	</main>
</template>

<script setup>
import { gsap } from "gsap";

const { portfolioDetails } = useRoute().params;
useHead({
	title: `Portfolio - ${portfolioDetails} | Alfred Thompson Ovie`,
	meta: {
		name: "description",
		content: "Some of my recent work",
	},
});
const data = await queryContent("projects").find();
const projects = data[0].body;

function getImageUrl(name) {
	// return new URL(`/public/images/detail/desktop/${name}`, import.meta.url).href;
	return new URL(`/assets/images/detail/desktop/${name}`, import.meta.url).href;
}
const beforeEnter = (el) => {
	gsap.set(el, {
		autoAlpha: 0.01,
		scale: 0.99,
	});
};
const enter = (el, done) => {
	gsap.to(el, {
		autoAlpha: 1,
		y: 0,
		duration: 1,
		delay: 0.5,
		scale: 1,
		onComplete: done,
	});
};
// const getFirstWord = (n) => n.split("-")[0];

const capitalizeTitle = (n) =>
	n
		.split("-")
		.map((n) => `${n[0].toUpperCase()}${n.slice(1).toLowerCase()}`)
		.join(" ");

const splitWord = (n) =>
	n
		.split("-")
		.map((n) => `${n[0].toUpperCase()}${n.slice(1).toLowerCase()}`)
		.join(" ");

const joinWordWitHyphen = (n) => n.split(" ").join("-").toLocaleLowerCase();
</script>

<style lang="scss" scoped>
main {
	padding-top: 5em;
}
.fade-enter-from {
	opacity: 0;
}
.fade.enter-active {
	transition: all 0.6s linear;
}
.grid__contents {
	scroll-behavior: smooth;
}
.project__contents {
	margin: 3em 0;
}
.project__info {
	border-top: 1px solid var(--GrayishDarkBlue-border);
	border-bottom: 1px solid var(--GrayishDarkBlue-border);
	padding: 2em 0;
}
.heading {
	font-family: Ibarra Real Nova;
	font-size: var(--fs-h2);
	font-weight: 700;
	line-height: 42px;
	letter-spacing: -0.3571428656578064px;
	text-align: left;
	color: var(--primary);
	color: var(--accent);
}
.subHeading {
	font-family: Ibarra Real Nova;
	font-size: var(--fs-h3);
	font-weight: 400;
	line-height: 42px;
	letter-spacing: -0.2857142984867096px;
	text-align: left;
}
.project__background > * {
	margin-bottom: 1.5em;
}
.project__background {
	.subHeading {
		margin-bottom: 0.6em;
	}
}
.description {
	margin: 1em 0;
	font-family: Public Sans;
	font-size: 0.9375rem;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: 0px;
	text-align: left;
}
.category {
	font-family: Public Sans;
	font-size: 0.8125rem;
	font-weight: 700;
	line-height: 30px;
	letter-spacing: 0px;
	text-align: left;
	p {
		color: #5fb4a2;
	}
}

.imgPreview__container {
	margin: 2.5em 0;
}
.imgPreview__container img {
	margin-bottom: 2em;
}
.navigation {
	position: relative;
	border-top: 1px solid var(--GrayishDarkBlue);
	border-bottom: 1px solid var(--GrayishDarkBlue);
	padding: 1em 0;
	margin-bottom: 5em;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: auto;
}
.navigation::before {
	content: "";
	position: absolute;
	width: 1px;
	height: 100%;
	background-color: var(--GrayishDarkBlue);
	top: 0;
	left: 50%;
	transform: translateX(-50%);
}
.navigation__btn {
	color: var(--primary);
	text-transform: capitalize;
}
.navigation__btn--left {
	grid-column: 1;
	text-align: left;
}
.navigation__btn--right {
	grid-column: 2;
	text-align: right;
}
.btn__content {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.btn__content--right {
	align-items: flex-end;
}
.btn__content--left {
	align-items: flex-start;
}
.btn__content--primary {
	font-family: var(--ff-subHeading1);
	font-size: 1.375rem;
	font-weight: 700;
	line-height: 36px;
	letter-spacing: -0.29px;
	@media (min-width: 23.4375em) {
		font-size: var(--fs-h3);
	}
}
.btn__content--sec {
	font-size: 0.75rem;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: 0px;

	color: var(--accent);
	opacity: 0.5;
	@media (min-width: 23.4375em) {
		font-size: 1rem;
	}
}
.btn__content--arrow {
	width: 8px;
	height: 16px;
	color: black;
}
/*! --> --> --> --> --> --> --> --> --> --> --> -->  */
/*? <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <--  */
/** --> --> --> --> --> --> --> --> --> --> --> -->  */
/*? <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <--  */
/*! --> --> --> --> --> --> --> --> --> --> --> -->  */

@media (min-width: 48em) {
	.project__info {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-areas: repeat(3, 2em);
		justify-content: start;
		align-items: start;

		.heading {
			grid-column: 1;
			grid-row: 1;
		}
		.category {
			grid-column: 1;
			grid-row: 2;
		}
		.cta {
			grid-column: 1;
			grid-row: 3;
			justify-self: start;
		}
		.description {
			grid-column: 2;
			grid-row: 1/4;
		}
	}
}
@media (min-width: 62em) {
	.project__contents {
		display: grid;
		grid-template-columns: 352px 1fr;
		grid-template-rows: auto;
		grid-gap: 6em;
	}
	.project__info {
		display: block;
		grid-column: 1;
		align-self: start;
	}
	.project__background {
		grid-column: 2;
	}
}
</style>
