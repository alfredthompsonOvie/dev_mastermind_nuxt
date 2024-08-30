<template>
	<section class="particles">
		<NuxtParticles id="tsparticles" :options="options" @load="onLoad">
		</NuxtParticles>
		<section class="bio">
			<section class="intro">
				<h1 class="name">
					<section class="name__surname">
						<span
							class="letter__surname--gsap"
							v-for="(letter, idx) in computedSurname"
							:key="idx"
						>
							{{ letter }}
						</span>
					</section>
					<section class="name__firstName">
						<span
							class="letter__firstname--gsap"
							v-for="(letter, idx) in computedFirstName"
							:key="idx"
							>{{ letter }}</span
						>
					</section>
				</h1>
				<SocialLinks page="hero" />

				<p class="profession">web developer</p>
			</section>

			<p class="personal__desc">
				A self-taught programmer driven by passion and personal projects. With
				expertise in <span class="fixing">fixing</span>
				<span class="bugs"> bugs</span> and crafting clean, efficient code, I'm
				here to turn ideas into reality. Let's collaborate and create something
				extraordinary!
			</p>
			<section class="cta__container cta__container__hero">
				<AppBtn text="Contact Me" linkPath="/contact" mode="primary" />
				<AppBtn text="View my work" linkPath="/portfolio" />
			</section>
		</section>

		<section class="scroll">
			<span>scroll</span>
			<span class="line"></span>
		</section>
	</section>
</template>

<script setup lang="ts">
import type { Container } from "tsparticles-engine";

const name = {
	surname: "Alfred",
	firstName: "Thompson",
};
const computedSurname = computed(() => name.surname.split(""));
const computedFirstName = computed(() => name.firstName.split(""));

const options = {
	fullScreen: {
		enable: false,
		zIndex: -1,
	},
	fpsLimit: 120,
	interactivity: {
		events: {
			onClick: {
				enable: true,
				mode: "push",
			},
			onHover: {
				enable: true,
				mode: "repulse",
			},
		},
		modes: {
			bubble: {
				distance: 400,
				duration: 2,
				opacity: 0.8,
				size: 40,
			},
			push: {
				quantity: 4,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
		},
	},
	particles: {
		color: {
			value: "hsl(208, 73%, 54%)",
		},
		links: {
			color: "hsl(208, 73%, 54%)",
			distance: 150,
			enable: false,
			opacity: 0.5,
			width: 1,
		},
		move: {
			direction: "none",
			enable: true,
			outModes: "bounce",
			random: false,
			speed: 6,
			straight: false,
		},
		number: {
			density: {
				enable: true,
			},
			value: 80,
		},
		opacity: {
			value: 0.5,
		},
		shape: {
			type: "circle",
		},
		size: {
			value: { min: 1, max: 5 },
		},
	},
	detectRetina: true,
};

const onLoad = (container: Container) => {
	container.pause();
	setTimeout(() => container.play(), 2000);
};

</script>

<style lang="scss" scoped>
.particles {
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	grid-template-rows: 5em auto 2em;
	color: var(--text);
	position: relative;
}

.bio {
	grid-column: 2;
	grid-row: 1/3;
	grid-row: 1/-1;
	max-width: 600px;
	margin-inline: auto;
	padding: 2em 0;
	/* background-color: red; */
}
.intro {
	display: flex;
	flex-direction: column;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, auto);
	gap: 0.5em;
}
.name {
	text-transform: uppercase;
	overflow: hidden;
	margin: 0;
	grid-column: 1/-1;
	grid-row: 1 span 2;
}
.name section {
	display: flex;
	justify-content: space-between;
}
.name__surname {
	font-family: "anurati";
	font-size: clamp(1rem, 15vw, 3.5rem);
	color: var(--primary);

	text-shadow: -1px -1px 1px #efede3, 0px 1px 0 #dba1a1, 0px 2px 0 #2c2c2c,
		0px 3px 0 #2a2a2a, 0px 4px 0 #282828, 0px 5px 0 #262626, 0px 6px 0 #242424,
		0px 7px 0 #222, 0px 8px 0 #202020, 0px 9px 0 #dba1a1,
		2px 20px 5px rgba(0, 0, 0, 0.9), 5px 23px 5px rgba(0, 0, 0, 0.3),
		8px 27px 8px rgba(0, 0, 0, 0.5), 8px 28px 35px rgba(230, 139, 139, 0.3);
}
.name__firstName {
	font-size: clamp(0.5rem, 5vw, 1rem);
	color: var(--text)
}
.profession {
	grid-column: 2;
	grid-row: 3;
	justify-self: end;
	/* align-self: flex-end; */
	font-size: clamp(0.5rem, 4vw, 1rem);
	text-transform: capitalize;
	font-style: italic;
	/* margin-top: 1em; */
	color: var(--accent);
}
.personal__desc {
	margin-top: 1em;
	font-style: italic;
	font-size: clamp(0.7rem, 5vw, 1rem);
	line-height: 1.5;
}

.fixing {
	text-transform: uppercase;
	color: var(--primary);
}
.bugs {
	color: var(--cta);
}
.cta__container {
	display: flex;
	flex-wrap: wrap;
	gap: 1em;
	max-width: 400px;
	margin-top: 2em;
}

.scroll {
	display: none;
}
@media (min-width: 500px) {
	.scroll {
		grid-column: 3;
		grid-row: 3;
		justify-self: center;
		align-self: flex-end;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1em;
		position: relative;
	}
	.scroll span {
		display: block;
	}
	.scroll span:first-of-type {
		transform: rotate(90deg);
		color: var(--accent);
	}
	.line {
		width: 2px;
		height: 70px;
		background-color:  #ffa500;
	}
}

@media (min-width: 768px) {
	.bio {
		padding-top: 2.5em;
	}
}
</style>
