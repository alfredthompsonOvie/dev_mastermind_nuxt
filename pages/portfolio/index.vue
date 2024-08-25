<template>
	<main>
		<section
			class="about grid"
			v-for="project in projects"
			:key="project.title"
		>
			<div class="grid__contents about__contents">
				<div class="about__illustration" data-aos="zoom-in">
					<!-- -->
					<picture>
						<source srcset="" media="" />
						<img
							:src="`${getImageUrl(project.desktopPreview)}`"
							:alt="`desktop preview of ${project.title}`"
						/>
					</picture>
				</div>
				<div class="about__content about__details">
					<h1 class="subHeading" data-aos="fade-up">
						<!--  -->
						{{ project.title }}
					</h1>
					<p class="description" data-aos="fade-up">
						<!-- -->
						{{ project.description }}
					</p>

					<NuxtLink
						:to="`/portfolio/${joinWord(project.title)}`"
						class="cta cta__sec"
						data-aos="fade-up"
					>
						<!--  -->
						View Project
					</NuxtLink>
				</div>
			</div>
		</section>

		<Info />
	</main>
</template>

<script setup>
useHead({
	title: "Portfolio | Alfred Thompson Ovie",
	meta: {
		name: "description",
		content:
			"Some of my recent work, I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
	},
});

const data = await queryContent("projects").find();
const projects = data[0].body;

const mobile = ref(null);
const tablet = ref(null);
const desktop = ref(null);
const windowWidth = ref(null);

function getImageUrl(name) {
	return new URL(`/assets/images/portfolio/desktop/${name}`, import.meta.url)
		.href;
}
const joinWord = (n) =>
	n
		.split(" ")
		.map((n) => `${n.toLowerCase()}`)
		.join("-");

const checkScreen = () => {
	windowWidth.value = window.innerWidth;
	// mobile
	if (windowWidth.value < 481) {
		mobile.value = true;
		tablet.value = false;
		desktop.value = false;
		// mobileMenu.value = true;
		return;
	}
	// tablet
	if (windowWidth.value < 768) {
		mobile.value = false;
		tablet.value = true;
		desktop.value = false;
		return;
	}
	// desktop
	mobile.value = false;
	tablet.value = false;
	desktop.value = true;
	return;
};

onMounted(() => {
	checkScreen();
	window.addEventListener("resize", checkScreen);
});
</script>

<style lang="scss" scoped>
main {
	padding-top: 5em;
}

.about__illustration {
	text-align: center;
}

.about__details {
	margin-top: 2em;
	border-top: 1px solid var(--LightGreyTextField);
	border-bottom: 1px solid var(--LightGreyTextField);

	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	padding: 1.5em 0;
}
.description {
	padding: 1em 0 1.2em;
}
.cta__sec {
	margin-top: 2em;
	margin-bottom: 3em;
	align-self: flex-start;
}

@media (min-width: 48em) {
	.about + .about {
		margin-top: 6em;
	}
	.about__contents {
		display: flex;
		flex-direction: row;
		grid-gap: 3em;
	}
	.about:nth-child(even) .about__contents {
		flex-direction: row-reverse;
	}
	.about__illustration {
		margin: 0;
		flex: 1;
		max-width: 31.25em;
		overflow: hidden;
		display: flex;

		img {
			height: 100%;
			width: 100%;
			object-fit: contain;
		}
	}
	.about__content {
		flex: 2;
		border-top: 1px solid var(--LightGreyTextField);
		border-bottom: 1px solid var(--LightGreyTextField);
		justify-content: center;
	}
	.about__details {
		margin-top: 0em;
		max-width: 20.625em;
		font-size: 0.9375rem;
	}
	.cta__sec {
		margin-top: 0em;
		margin-bottom: 1em;
		align-self: flex-start;
	}
	.subHeading {
		margin: 0;
	}
}

@media (min-width: 75em) {
	.about + .about {
		margin-top: 4em;
	}
	.about__contents {
		grid-gap: 6em;
	}
	.about__illustration {
		max-width: 34.375em;
	}
}
</style>
