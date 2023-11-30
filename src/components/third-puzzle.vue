<template>
    <div class="puzzle one background">
        <puzzles :answer="active" solution="B" presentLocation="bathroom drawer">
            <template #title><span>Quikest way</span></template>

            <template #description>
                <p> 
                    Professor Layton and his companions find themselves in an enchanted maze, filled with twists and turns. 
                    To escape the maze and continue their journey, they must find the correct path to the exit.
                </p>
            </template>

            <template #question>
                <p>To escape the maze, you must find the right path.</p>
                <p>The entrances are noted down as A, B and C. The exit is noted down as E.</p>
                <p>Click on one of the entrances to select them.</p>
            </template>

            <template #puzzle>
                <div class="grid">
                    <div v-for="puzzleCol of MAZELAYOUT" 
                    :key="puzzleNum" 
                    class="grid-col" 
                    :class="{'wall': puzzleCol === 'x', 'exit': puzzleCol === 'E', 'entrance': puzzleCol.match(/[ABC]/g), 'active': puzzleCol === active}"
                    >
                        <p v-if="puzzleCol.match(/[ABCE]/g)" @click="onClick(puzzleCol)">{{ puzzleCol }} </p>
                    </div>
                </div> 
            </template>
        </puzzles>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import puzzles from './puzzles.vue';

const active = ref('')

const MAZELAYOUT = [ 
    'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'B', 'x',
    'A', 'p', 'p', 'x', 'p', 'p', 'x', 'p', 'p', 'x', 'p', 'p', 'p', 'p', 'x',
    'x', 'x', 'p', 'x', 'x', 'p', 'x', 'p', 'x', 'x', 'p', 'x', 'p', 'x', 'x',
    'x', 'x', 'p', 'x', 'x', 'p', 'p', 'p', 'x', 'x', 'p', 'x', 'p', 'x', 'x',
    'x', 'x', 'p', 'x', 'x', 'p', 'x', 'p', 'p', 'x', 'p', 'x', 'p', 'p', 'x',
    'x', 'p', 'p', 'x', 'x', 'p', 'x', 'x', 'x', 'x', 'p', 'x', 'x', 'p', 'x',
    'x', 'p', 'x', 'x', 'p', 'p', 'p', 'x', 'x', 'p', 'p', 'x', 'x', 'p', 'x',
    'x', 'p', 'p', 'p', 'p', 'x', 'p', 'x', 'x', 'p', 'x', 'x', 'p', 'p', 'x',
    'x', 'x', 'x', 'x', 'x', 'x', 'p', 'p', 'x', 'p', 'x', 'x', 'x', 'x', 'x',
    'x', 'x', 'p', 'p', 'p', 'x', 'x', 'x', 'x', 'p', 'x', 'p', 'p', 'p', 'x',
    'x', 'p', 'p', 'x', 'p', 'p', 'p', 'x', 'p', 'p', 'x', 'p', 'x', 'p', 'x',
    'x', 'p', 'x', 'x', 'p', 'x', 'p', 'x', 'p', 'x', 'x', 'p', 'x', 'p', 'x',
    'x', 'p', 'x', 'x', 'p', 'x', 'p', 'x', 'p', 'p', 'p', 'p', 'x', 'p', 'x',
    'x', 'p', 'x', 'x', 'p', 'p', 'p', 'p', 'x', 'x', 'x', 'x', 'x', 'p', 'x',
    'x', 'C', 'x', 'x', 'x', 'x', 'x', 'p', 'p', 'p', 'p', 'p', 'x', 'E', 'x',
]

function onClick(entrance) {
    if(entrance !== 'E') active.value = entrance
}
</script>

<style scoped>
p, strong, span {
    color: black;
}

span {
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: saturate(180%) blur(10px);
}
.background {
    background-image: url('/src/assets/img/backgrounds/background_3.png');
}

input {
    width: 4rem;
    height: 4rem;
}

.grid {
    display: grid;
    grid-template-rows: repeat(15, 1rem);
    grid-template-columns: repeat(15, 1rem);
    border: 2px solid black;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: saturate(180%) blur(10px);
}

.grid-col {
    display: flex;
    align-items: center;
    justify-content: center;
}

.grid-col p {
    color: white;
}

.grid-col.wall {
    background: rgba(0, 0, 0, 0.75);

}

.grid-col.exit {
    background: rgba(255, 0, 0, 0.5);;
}

.grid-col.entrance {
    background: rgba(81, 0, 255, 0.5);;
}

.grid-col.entrance:hover {
    background: rgba(81, 0, 255, 0.8);
    cursor: pointer;
}

.grid-col.entrance.active {
    background: rgba(1, 159, 30, 0.9);;
}

</style>