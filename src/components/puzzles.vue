<template>
    <div class="container">
        <h1>
            <slot name="title"></slot>
        </h1>

        <div class="description">
            <div class="tabs">
                <button class="tablinks" :class="{'active': activeTab === tabs.story}" @click="onTabClick(tabs.story)">Story</button>
                <button class="tablinks" :class="{'active': activeTab === tabs.puzzle}" @click="onTabClick(tabs.puzzle)">Puzzle</button>
            </div>
            <div class="tabs-content">
                <slot v-if="activeTab === tabs.story" name="description"></slot>
                <slot v-if="activeTab === tabs.puzzle" name="question"></slot>
            </div>
        </div>
        <div class="puzzle-field">
            <slot name="puzzle"></slot>
        </div>
        <button class="solved-button" @click="onSubmit">Solved</button>

        <modal v-if="solutionModalOpen" 
        :title="correctAnswer ? 'Correct' : 'Incorrect'" 
        :description="correctAnswer ? `Look in ${presentLocation} for your present!` : 'Shamefully that is not the correct answer.'" 
        @close="onClose">

            <template #options>
                <button v-if="correctAnswer && !isLastPuzzle" @click="onNextPuzzle">Next one</button>
                <button v-if="!correctAnswer" @click="onClose">Try again</button>
            </template>
        </modal>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import modal from './modal.vue';
import { storeToRefs } from 'pinia'
import { usePuzzleStore } from '../store'

const store = usePuzzleStore()
const { isLastPuzzle } = storeToRefs(store) 


const props = defineProps(['answer', 'solution', 'presentLocation'])

const emit = defineEmits(['submitSolved'])

const tabs = {
    story: 'story',
    puzzle: 'puzzle'
}

const activeTab = ref(tabs.story)

const solutionModalOpen = ref(false)

const correctAnswer = ref(false)

function onTabClick(tab) {
    activeTab.value = tab
}

function onSubmit() {
    solutionModalOpen.value = true
    console.log(props.answer)
    correctAnswer.value = JSON.stringify(props.answer) === JSON.stringify(props.solution)
}

function onClose() {
    solutionModalOpen.value = false
}

function onNextPuzzle() {
    onClose()
    store.nextPuzzle()
}
</script>

<style scoped>
.container {
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100svh;
    align-items: center;
}

.tabs {
    display: flex;
    align-items: left;
}

.tabs button {
    border-radius: 0;
    background-color: #bebebe;
    border: 1px solid #bebebe;
    color: black;

}

.tabs button:hover {
    background-color: #d8d8d8;
}


.tabs button.active {
    background-color: white;
    border: 1px solid white;
    color: black;

}

.tabs button.active:hover {
    cursor: default;
}

.tabs-content {
    max-height: 20rem;
    padding: 1rem;
    overflow: scroll;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: saturate(180%) blur(10px);
}

.puzzle-field {
    flex: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.solved-button {
    margin: 1rem;
    padding: 1rem;
    min-width: 15rem;
    max-width: 30rem;
    border: 2px solid white;
}
</style>