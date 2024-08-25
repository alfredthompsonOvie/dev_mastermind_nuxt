<template>
	<section class="contact">
		<div class="contact__contents">
			<h2 class="subHeading contact--gsap" data-aos="flip-down">
				Interested in doing a project together?
			</h2>
			<span class="line contact--gsap" data-aos="fade-right"></span>

			<AppBtn
				text="Contact Me"
				linkPath="/contact"
				mode="primary"
				aos-type="fade-right"
			/>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
.contact {
	grid-column: 2;
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	grid-template-rows: auto;
	color: var(--text);
}
.contact__contents {
	grid-row: 1;
	grid-column: 2;
	text-align: center;
	padding: 5em 0;
}
.subHeading {
	max-width: 320px;
	margin-inline: auto;
	margin-bottom: 1em;
}
.contact .btn {
	flex: 1;
	padding: 0.5em 1em;
	font-size: 1rem;
}

@media (min-width: 550px) {
	.subHeading {
		max-width: 330px;
	}
}

@media (min-width: 760px) {
	.contact__contents {
		display: flex;
		align-items: center;
		gap: 2em;
	}
	.subHeading {
		margin: 0;
		text-align: left;
	}
	.contact .line {
		background-color: var(--cta);
		width: 100%;
		width: 50%;
		height: 2px;
		display: inline-flex;
	}
}
@media (min-width: 776px) {
	.contact .cta {
		flex: 2;
		display: block;
		margin-top: 0;
		padding: 0.8em 1em;
	}
}
</style>
