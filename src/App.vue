<template>
	<div id="app">
		<div class="logo" v-html="require(`@/assets/${svgPath}.svg`)"></div>
		<HelloWorld message="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
/* eslint-disable indent */

	"use strict";

	import HelloWorld from "@/components/HelloWorld.vue";

	export default {
		name: "App",
		components: {
			HelloWorld
		},
		data: () => ({
			svgPath: "vue-art/logo"
		})
	};
</script>

<style lang="scss">
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	#app .logo {
		$max-size: 200px;

		max-width: $max-size;
		max-height: $max-size;
		margin: 0 auto;
	}
</style>
