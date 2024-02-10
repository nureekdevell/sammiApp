<template>
	<div>Home {{ $store.state.count }}</div>
	<button class="btn btn-primary" @click="incrementHandler">increment</button>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore;

const incrementHandler = computed(() => store.state.count);
const 
</script>

<style scoped></style>
