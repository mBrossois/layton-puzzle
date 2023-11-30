<script setup>
import { ref } from 'vue';
import FirstPuzzle from './components/First-puzzle.vue';
import secondPuzzle from './components/second-puzzle.vue';
import thirdPuzzle from './components/third-puzzle.vue';
import { usePuzzleStore } from './store'
import { storeToRefs } from 'pinia';

const store = usePuzzleStore()
const { geActivePuzzle } = storeToRefs(store) 

// const activePuzzle = ref(0);
</script>

<template>
  <div>
    <first-puzzle v-if="geActivePuzzle === 0"/>
    <second-puzzle v-if="geActivePuzzle === 1"></second-puzzle>
    <third-puzzle v-if="geActivePuzzle === 2"></third-puzzle>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
