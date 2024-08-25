<template>
	<NuxtLink 
	:to="linkPath" 
	class="btn" 
	:class="{ primary: mode === 'primary' }"
	:data-aos="aosType"
	>
		{{ text }}
		<span class="first"></span>
		<span class="second"></span>
		<span class="third"></span>
		<span class="fourth"></span>
	</NuxtLink>
</template>

<script setup>
defineProps({
	text: {
		type: String,
		required: true,
	},
	linkPath: {
		type: String,
		required: true,
	},
	mode: {
		type: String,
	},
	aosType: {
		type: String,
	}
});
</script>

<style lang="scss" scoped>
.btn {
	flex: 1;
	padding: 0.5em 1em;
	font-size: 1rem;
	text-align: center;
	color: var(--accent);
	color: var(--primary);
	color: var(--text);

	/* color: var(--cta); */

	min-width: fit-content;
	border-radius: 0.3em;

	overflow: hidden;
	position: relative;
	z-index: 1;
}
.primary {
	border: 3px solid var(--primary);
	/* border: 1px solid var(--text); */
	/* border: 1px solid var(--cta); */
}
.btn:hover {
	color: var(--text);

}
.btn span {
	transition: all 0.7s;
	z-index: -1;
}

.btn .first {
	content: "";
	position: absolute;
	right: 100%;
	top: 0;
	width: 25%;
	height: 100%;
  background-color: var(--primary);
}

.btn:hover .first {
	top: 0;
	right: 0;
}
.btn .second {
	content: "";
	position: absolute;
	left: 25%;
	top: -100%;
	height: 100%;
	width: 25%;
  background-color: var(--primary);
}

.btn:hover .second {
	top: 0;
	left: 50%;
}

.btn .third {
	content: "";
	position: absolute;
	left: 50%;
	height: 100%;
	top: 100%;
	width: 25%;
  background-color: var(--primary);
}

.btn:hover .third {
	top: 0;
	left: 25%;
}

.btn .fourth {
	content: "";
	position: absolute;
	left: 100%;
	top: 0;
	height: 100%;
	width: 25%;
  background-color: var(--primary);
}

.btn:hover .fourth {
	top: 0;
	left: 0;
}
</style>
