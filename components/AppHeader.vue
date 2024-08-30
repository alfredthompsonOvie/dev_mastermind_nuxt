<template>
	<ClientOnly>
		<header>
			<nav class="navbar">
				<Brand />

				<Hamburger :isMobile="isMobile" @menuState="handleClick" />
				<ul class="menu" ref="menu" v-if="isOpen">
					<li>
						<NuxtLink 
						to="/#about" 
						class="navLinks"
						>
							About Me
							<span class="first"></span>
							<span class="second"></span>
							<span class="third"></span>
							<span class="fourth"></span>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/portfolio" id="portfolio" class="navLinks">
							Portfolio
							<span class="first"></span>
							<span class="second"></span>
							<span class="third"></span>
							<span class="fourth"></span>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/contact" id="contact" class="navLinks">
							Contact me
							<span class="first"></span>
							<span class="second"></span>
							<span class="third"></span>
							<span class="fourth"></span>
						</NuxtLink>
					</li>
				</ul>
			</nav>
		</header>
	</ClientOnly>
</template>

<script setup>

const SCREEN_SIZE = 768;
const isMobile = ref(null);
// isMobileNavOPen
const isOpen = ref(false);
// const isMobileNavOpen = ref(false);
const menu = ref(null);
const windowWidth = ref(null);

const route = useRoute();

watch(
	() => route.fullPath,
	() => {
		checkScreenSize();
	}
);

onMounted(() => {
	checkScreenSize();

	window.addEventListener("resize", checkScreenSize);
});

function checkScreenSize() {
	windowWidth.value = window.innerWidth;
	if (windowWidth.value < SCREEN_SIZE) {
		isMobile.value = true;
		isOpen.value = false;
		return;
	}
	isMobile.value = false;
	isOpen.value = true;
}

function handleClick(state) {
	isOpen.value = state;
}
</script>

<style scoped>
header {
	max-width: 1440px;
	width: 100%;
	margin-inline: auto;
	position: fixed;
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	padding: 1em 0;
	background-color: var(--secondary);
	border-bottom: 1px solid #000;
	z-index: 100;
}
.navbar {
	grid-column: 2;
	grid-row: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1em;
	position: relative;
}

.menu {
	position: absolute;
	top: 2.5em;
	right: 0;
	background-color: var(--primary);
	background-color: var(--secondary);
	border-radius: 0 0 0.4em 0.4em;
	padding: 1em;
	display: flex;
	flex-direction: column;
	gap: 0.5em;
}
.menu.closed {
	display: none;
}

.navLinks {
	text-transform: capitalize;
	padding: 0.3em 1em;
	background-color: transparent;
	color: var(--text);
	cursor: pointer;
	transition: all 0.7s;
	overflow: hidden;
	border-radius: 5px;
	position: relative;
	z-index: 1;

	width: 100%;
	display: block;
}

.navLinks:hover {
	color: #000;
	color: var(--bg);
}
.navLinks span {
	transition: all 0.7s;
	z-index: -1;
}

.navLinks .first {
	content: "";
	position: absolute;
	right: 100%;
	top: 0;
	width: 25%;
	height: 100%;
	/* background-color: #ffa500; */
	background-color: var(--primary);
}

.navLinks:hover .first {
	top: 0;
	right: 0;
}
.navLinks .second {
	content: "";
	position: absolute;
	left: 25%;
	top: -100%;
	height: 100%;
	width: 25%;
	background-color: var(--primary);
}

.navLinks:hover .second {
	top: 0;
	left: 50%;
}

.navLinks .third {
	content: "";
	position: absolute;
	left: 50%;
	height: 100%;
	top: 100%;
	width: 25%;
	background-color: var(--primary);
}

.navLinks:hover .third {
	top: 0;
	left: 25%;
}

.navLinks .fourth {
	content: "";
	position: absolute;
	left: 100%;
	top: 0;
	height: 100%;
	width: 25%;
	background-color: var(--primary);
}

.navLinks:hover .fourth {
	top: 0;
	left: 0;
}

/* 768px */
@media (min-width: 768px) {
	header {
		padding: 0.5em 0;
	}
	.menu {
		position: static;
		flex-direction: row;
		background-color: transparent;
		padding: 0.2em 0;
	}
}
</style>
