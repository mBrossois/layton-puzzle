<template>
    <div class="puzzle one background">
        <puzzles :answer="characterOrder" :solution="SOLUTION" presentLocation="glasses cabinet">
            <template #title>Seating order</template>

            <template #description>
                <p> 
                    Professor Layton and his friends find themselves invited to a mysterious dinner party at
                    Katrielle's church. The guests include Katrielle, Professor Layton, Luke, Don Paolo and Inspector Chelmey, 
                    .  <br><br>
                    Katrielle, being fond of puzzles, presents a challenge related to 
                    their seating arrangement:
                    <br>
                    "Welcome, everyone! Tonight, you'll enjoy a delightful dinner, 
                    but there's a twist. I've arranged your seats according to a set of clues. 
                </p>
            </template>

            <template #question>
                <p>  Can you figure out who sits where? Here are the clues: </p>
                <ol>
                    <li>Katrielle cannot sit next to Professor Layton or Don Paolo.</li>
                    <li>Inspector Chelmey insists on sitting next to Lady Penelope.</li>
                    <li>Luke wants to sit as far away from Don Paolo as possible.</li>
                    <li>Don Paolo is determined to sit next to inspector Chelmey.</li>
                    <li>Professor Layton prefers to have Luke on his right side.</li>
                </ol>
            </template>

            <template #puzzle>
                <div class="selectCharacter">
                    <img v-for="(character, index) of characterOrder" 
                    :key="character"
                    :id="character"
                    class="character" 
                    :src="`/src/assets/img/characters/${character}.webp`" 
                    :alt="character"
                    @click="onClick(character, index)"
                    >
                </div>
            </template>
        </puzzles>

        <modal v-if="selectModal" 
        title="Select seat" 
        :description="`Select seat for ${selectModalCharacter}`" 
        @close="onClose">

            <template #options>
                <button v-for="index in characterOrder.length" :key="index" @click="onSelectPosition(index - 1)">{{ index }}</button>
            </template>
        </modal>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import puzzles from './puzzles.vue';
import modal from './modal.vue';

const selectModal = ref(false)
const selectModalCharacter = ref('')
const clickedCharacterIndex = ref(0)

const characters = {
    layton: 'Layton',
    katrielle: 'Katrielle',
    poalo: 'DonPoalo',
    chelmey: 'Chelmey',
    luke: 'Luke'
}

const SOLUTION = [
    characters.layton,
    characters.luke,
    characters.katrielle,
    characters.chelmey,
    characters.poalo
]

const characterOrder = ref([
    characters.layton,
    characters.katrielle,
    characters.poalo,
    characters.chelmey,
    characters.luke
])

function onClick(character, index) {
    selectModalCharacter.value = character
    clickedCharacterIndex.value = index
    selectModal.value = true
}

function onClose() {
    selectModal.value = false
}

function onSelectPosition(position) {
    characterOrder.value.splice(clickedCharacterIndex.value, 1)
    const endCharacterOrder = characterOrder.value.splice(position)
    characterOrder.value.push(selectModalCharacter.value)
    characterOrder.value.push(...endCharacterOrder)
    onClose()
}

</script>

<style scoped>
.background {
    background-image: url('/src/assets/img/backgrounds/background_1.jpg');
}

.selectCharacter {
    padding-top: 1rem;
}

.character {
    width: 4rem;
    height: 12rem;
}

</style>