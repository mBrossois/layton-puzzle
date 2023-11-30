import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePuzzleStore = defineStore('puzzle', () => {

  const lastPuzzle = 2

  const activePuzzle = ref(0)

  const isLastPuzzle = computed(() => activePuzzle.value === lastPuzzle)

  const geActivePuzzle = computed(() => activePuzzle.value)

  function nextPuzzle() {
    activePuzzle.value++
  }

  return { isLastPuzzle, geActivePuzzle, nextPuzzle }
})