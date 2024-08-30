<template>
	<section class="about profile" id="about" ref="about">
		<section class="profile__card">
			<section class="profile__img__container" data-aos="fade-right">
				<NuxtImg src="/profilemini2.png" alt="" class="profile__img" />
			</section>
			<section class="profile__desc">
				<h1 class="profile__title" data-aos="fade-right" data-aos-delay="300">About Me</h1>
				<section class="profile__text">
					<p data-aos="flip-down" data-aos-duration="1300" data-aos-delay="300">
						With over three years of experience in coding, I've turned my
						passion into a career dedicated to bringing digital visions to life.
						My mission is clear: to understand your unique goals and transform
						them into functional, engaging applications. Every project is an
						opportunity to deliver a solution that captures the essence of your
						ideas while providing seamless performance.
					</p>

					<p data-aos="flip-down" data-aos-duration="1300" data-aos-delay="350">
						Clients often ask how I consistently meet their vision, and the
						answer is simple I listen carefully, understand their needs, and
						faithfully translate those ideas into code. I approach every project
						with a blend of creativity and technical skill, ensuring that the
						final product not only works but also stands out.
					</p>

					<p data-aos="flip-down" data-aos-duration="300" data-aos-delay="300">
						Let’s collaborate to turn your ideas into reality.
					</p>
				</section>
				<section class="cta__container cta__container__about">
					<AppBtn
						text="Contact Me"
						linkPath="/contact"
						mode="primary"
						aos-type="fade-right"
					/>
					<AppBtn
						text="View my work"
						linkPath="/portfolio"
						aos-type="fade-left"
					/>
				</section>
			</section>
		</section>
	</section>
</template>

<script setup>

const about = ref(null)
const { scrollToAnchor, scrollToTop } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: 'smooth',
      offsetTop: 0,
    }
  },
})
console.log(scrollToTop(about))
</script>

<style lang="scss" scoped>
.profile {
	position: relative;
	overflow: hidden;
}
.profile__card {
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	grid-template-rows: auto auto;
}
.profile__img__container {
	grid-column: 1/-1;
	grid-row: 1;
	height: 20em;
	display: flex;
}
.profile__img {
	object-fit: cover;
	margin: 0 auto;
}
.profile__desc {
	grid-column: 2;
	grid-row: 2;
}
.profile__title {
	font-family: var(--ff-subHeading);
	font-size: clamp(2rem, 5vw,  var(--fs-h1));
	color: var(--accent);
}
.profile__text {
	display: flex;
	flex-direction: column;
	gap: 1em;
}
.cta__container {
	display: flex;
	flex-wrap: wrap;
	gap: 1em;
	max-width: 400px;
	margin: 2em 0;
}

@media (min-width: 500px) {
	.profile__img__container {
		grid-column: 1/-1;
		grid-row: 1;
	}
}
@media (min-width: 992px) {
	.profile::before,
	.profile::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.profile::before {
		background-color: var(--secondary);
		z-index: -2;
	}
	.profile::after {
		clip-path: polygon(83% 0, 100% 0, 100% 100%, 57% 100%);
		background-color: var(--cta);
		z-index: -1;
	}
	.profile__card {
		display: grid;
		grid-template-columns: 1fr 5.5fr 4.5fr 1fr;
		grid-template-rows: auto;
		overflow: hidden;
	}
	.profile__img__container {
		grid-column: 1/-1;
		grid-row: 1;
		height: initial;
		justify-content: flex-end;
		align-self: end;
		justify-content: end;
		height: 35em;
	}
	.profile__img {
		height: 100%;
		object-fit: contain;
		object-position: top right;
		margin: 0;
	}
	.profile__desc {
		grid-column: 2;
		grid-row: 1;
		align-self: center;
	}
}
@media (min-width: 1200px) {
	.profile__img__container {
		height: 40em;
	}
}
</style>
