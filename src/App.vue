<template>
	<transition name="fade" mode="out-in">
		<RouterView />
	</transition>

</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
<style>
/* 定义过渡样式 */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
