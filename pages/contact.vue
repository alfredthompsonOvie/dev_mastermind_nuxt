<template>
	<main class="grid" ref="main__contact">
		<section class="grid__contents">
			<section class="contact__details contact__section flex">
				<h1 class="subHeading flex__contents--heading subHeading--contact">
					Get in Touch
				</h1>
				<section class="contact__contents__container flex__contents--body">
					<p class="contact__description contact--desc">
						I'm excited to connect and learn about your current projects and how
						I can contribute. I'm actively seeking new opportunities and am open
						to a wide range of roles. With a strong work ethic and attention to
						detail, I approach every task with purpose and positivity. Feel free
						to explore my online profiles below and reach out via the contact
						form, I'd love to hear from you!
					</p>

					<SocialLinks page="contact" />
				</section>
			</section>

			<section class="contact__section">
				<form @submit="onSubmit">
					<fieldset class="flex">
						<section class="flex__contents--heading">
							<legend class="subHeading subHeading--form">Contact Me</legend>
						</section>
						<section class="form__contents flex__contents--body">
							<section class="form__group">
								<label for="fullname">Name</label>
								<input
									type="text"
									name="fullname"
									id="fullname"
									placeholder="Jane Appleseed"
									v-model="fullname"
									class="form__control"
									:class="{
											addBorder: errors.fullname,
											success: !errors.fullname,
										}"
								/>
								<p v-if="errors" class="error">{{ errors.fullname }}</p>
							</section>
							<section class="form__group">
								<label for="email">Email Address</label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="email@example.com"
									v-model="email"
									class="form__control"
									:class="{ addBorder: errors.email, success: !errors.email }"
								/>
								<p v-if="errors" class="error">{{ errors.email }}</p>
							</section>
							<section class="form__group">
								<label for="message">Message</label>
								<textarea
									v-model="message"
									name="message"
									id="message"
									cols="30"
									rows="10"
									placeholder="How can I help?"
									class="form__control"
									:class="{
											addBorder: errors.message,
											success: !errors.message,
										}"
								></textarea>
								<p v-if="errors" class="error">{{ errors.message }}</p>
							</section>
							<section class="form__group">
								<input
									type="submit"
									value="Send Message"
									:disabled="isSubmitting"
								/>
							</section>
						</section>
					</fieldset>
				</form>
			</section>
		</section>
		<section class="feedback" v-if="showFeedback">
			<section class="feedback__content">
				<!-- particle js -->
				<h1 class="subHeading">Thank You!</h1>
				<p>Your email has been sent.</p>
				<p>
					I will get back to you shortly. In the meantime, check out my work or
					connect with me on
					<NuxtLink
						to="https://www.linkedin.com/in/alfredthompsonovie/"
						class="social__link"
						target="_blank"
					>
						LinkedIn
					</NuxtLink>
				</p>
				<section></section>
				<NuxtLink to="/" class="cta cta__sec">Go back to homepage</NuxtLink>
			</section>
		</section>
	</main>
</template>

<script setup>
import { useField, useForm } from "vee-validate";
import { object, string } from "yup";

const isSubmitting = ref(false);
const showFeedback = ref(false);

const schema = object({
	fullname: string().required("This field is required"),
	email: string().required("This field is required").email(),
	message: string().required("This field is required"),
});

const { handleSubmit, errors } = useForm({
	validationSchema: schema,
});

const { value: fullname } = useField("fullname");
const { value: email } = useField("email");
const { value: message } = useField("message");

const onSubmit = handleSubmit((values) => {
	console.log(values);
	isSubmitting.value = true;

	async function submitDate() {
		console.log("submitDate");
		const res = await $fetch('/api/send', {
			method: 'post',
			body: { ...values}
		})
		
		if(res.data){
			showFeedback.value = true;
			isSubmitting.value = false;
		}
		// handle errors
	}
	submitDate();
});
</script>

<style lang="scss" scoped>
.grid {
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	grid-template-rows: 5em auto;
	background-color: var(--background-alt);
	color: var(--text);
}
@media (min-width: 81.25em) {
	.grid {
		grid-template-columns: 1.5fr 9fr 1.5fr;
	}
}

.grid__contents {
	grid-row: 2;
	grid-column: 2;
}
section > section {
	/* margin-top: 2em; */
	padding: 2em 0;
}
.contact__details {
	border-top: 2px solid var(--GrayishDarkBlue-border);
	border-bottom: 2px solid var(--GrayishDarkBlue-border);
	/* padding: 2em 0; */
}
.subHeading {
	font-family: "Ibarra Real Nova";
	font-size: 2rem;
	font-weight: 600;
	margin: 0;
	color: var(--accent);
}
.contact__description {
	margin: 1.5em 0;
}
/* .social__list {
	display: flex;
	align-items: center;
	gap: 1em;
}
.social__link {
	img {
		transition: all 0.3s linear;
	}
	&:hover img {
		transform: rotate(-12deg) scale(1.2);
	}
} */
/*! --> --> --> --> --> --> --> --> --> --> --> -->  */
/*? <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <--  */
/** --> --> --> --> --> --> --> --> --> --> --> -->  */
/*? <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <-- <--  */
/*! --> --> --> --> --> --> --> --> --> --> --> -->  */
form {
	margin-bottom: 2em;
}
fieldset {
	border: 0;
}
.form__contents {
	margin: 1em 0;
}
.form__group + .form__group {
	margin-top: 1.5em;
}
label {
	display: inline-block;
	font-weight: 700;
	font-size: 0.8125rem;
	line-height: 30px;
}
.form__control {
	display: inline-block;
	width: 100%;
	padding: 0.5em 1em;
	background-color: var(--LightGreyTextField);
	border: 0;
	border-radius: 0.2em;
	border: 2px solid transparent;
}
.success {
	border: 1px solid var(--SlightlyDesaturatedCyan);
}

input[type="submit"] {
	padding: 1em 3em;
	color: #fff;
	background-color: var(--DarkBlue);
	background-color: var(--primary);
	border: 0;
	text-transform: uppercase;

	font-family: Public Sans;
	font-size: 0.75rem;
	font-weight: 400;
	line-height: 14px;
	letter-spacing: 2px;
	text-align: center;
	cursor: pointer;
	transition: all 0.3s linear;
}
input[type="submit"]:hover {
	background-color: var(--SlightlyDesaturatedCyan);
}
.error {
	color: var(--BrightRedErrors);
	font-style: italic;
	font-size: 0.75rem;
}
.addBorder {
	border: 2px solid var(--BrightRedErrors);
}
input[disabled] {
	cursor: not-allowed;
}

.feedback {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 2em;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 1000;
	padding-inline: 2em;
}
.feedback__content {
	grid-column: 2;
	position: relative;
	z-index: 99;
	max-width: 28.125em;
	text-align: center;
	padding: 2em;
	border-radius: 1em;
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
	background-color: var(--bg);

}
.feedback__content .subHeading {
	margin-bottom: 0.7em;
	font-family: var(--ff-text1);
}
.feedback .social__link {
	text-decoration: underline;
	text-transform: capitalize;
	color: var(--primary);
	font-size: var(--fs-b3);
	font-family: var(--ff-text1);
}
.feedback .social__link:hover {
	color: var(--accent);
}

@media (min-width: 62em) {
	.contact__description {
		margin: 0;
		margin-bottom: 1.5em;
	}
	.form__contents {
		margin-top: 0;
	}
	.flex {
		display: flex;
		align-items: flex-start;
	}
	.flex__contents--heading {
		flex: 1;
	}
	.flex__contents--body {
		flex: 1;
	}
}
</style>
