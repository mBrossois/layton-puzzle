<template>
    <div class="puzzle one background">
        <puzzles :answer="inputValues" :solution="SOLUTION" presentLocation="switch games">
            <template #title><span>Number grid</span></template>

            <template #description>
                <p> 
                    Professor Layton and his companions find themselves in a mysterious room with a locked door. 
                    To unlock the door, they must solve a puzzle related to a 3x3 number grid. 
                    The numbers in the grid are clues, and they must follow a specific rule.
                </p>
            </template>

            <template #question>
                <p>  To unlock the door and escape, you must decipher the rule governing the numbers 
                    in this 3x3 grid. Here are the clues</p>
                <strong>Rule:</strong>
                <p>The numbers in each row, column, and diagonal must follow a specific mathematical 
                    relationship. Can you determine the missing numbers and unlock the door?</p>
            </template>

            <template #puzzle>
                <div class="grid">
                    <div v-for="puzzleNum of PUZZLELAYOUT" :key="puzzleNum" class="grid-col">
                        <input v-if="hasLetter(puzzleNum)" type="number" @input="onChange($event, puzzleNum)"/>
                        <p v-else>{{ puzzleNum }}</p>
                    </div>
                </div> 
            </template>
        </puzzles>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import puzzles from './puzzles.vue';

const PUZZLELAYOUT = [
    'a', 1, 6,
    3, 5, 7,
    'b', 9, 'c'
]

const SOLUTION = {
    'a': 8,
    'b': 4,
    'c': 2
}

const inputValues = ref({
    'a': 0,
    'b': 0,
    'c': 0
})

function onChange(input, letter) {
    inputValues.value[letter] = Number(input.data)
}

function hasLetter(input) {
    return input.toString().match(/[abc]/g)
}


</script>

<style scoped>
p, strong, span {
    color: black;
}

span {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: saturate(180%) blur(10px);
}
.background {
    background-image: url('/src/assets/img/backgrounds/background_2.jpg');
}

input {
    width: 4rem;
    height: 4rem;
}

.grid {
    display: grid;
    grid-template-rows: 5rem 5rem 5rem;
    grid-template-columns: 5rem 5rem 5rem;
}

.grid-col {
    border: 2px solid black;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: saturate(180%) blur(10px);
    color: black;

    display: flex;
    align-items: center;
    justify-content: center;
}

</style>