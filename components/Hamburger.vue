<template>
	<div
		class="wrapper-menu"
		:class="{ open: isOpen }"
		@click="handleClick"
		v-if="isMobile"
	>
		<div class="line-menu half start"></div>
		<div class="line-menu"></div>
		<div class="line-menu half end"></div>
	</div>
</template>

<script setup>
const emit = defineEmits(["menuState"]);
defineProps({
	isMobile: {
		type: Boolean,
	},
});

const isOpen = ref(false);


const route = useRoute();

watch(()=>route.fullPath, ()=>{
	isOpen.value = false;
})

onMounted(() => {
	window.addEventListener("resize", () => {
		isOpen.value = false;
	});
});

function handleClick() {
	isOpen.value = !isOpen.value;
	emit("menuState", isOpen.value);
}
</script>

<style lang="scss" scoped>
.wrapper-menu {
	width: 25px;
	height: 25px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
	transition: transform 330ms ease-out;
	/* background-color: red; */
}

.wrapper-menu.open {
	transform: rotate(-45deg);
}
.wrapper-menu.open .line-menu {
	background-color: var(--accent);
}
.line-menu {
	background-color: #fff;
	border-radius: 5px;
	width: 100%;
	height: 3px;
}

.line-menu.half {
	width: 50%;
}

.line-menu.start {
	transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
	transform-origin: right;
}

.open .line-menu.start {
	transform: rotate(-90deg) translateX(1px);
}

.line-menu.end {
	align-self: flex-end;
	transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
	transform-origin: left;
}

.open .line-menu.end {
	transform: rotate(-90deg) translateX(-2px);
}
</style>
