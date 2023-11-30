<template>
    <div>
        <div class="background" @click="onClose"></div>
        <div class="modal-container">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <div class="options">
                <slot name="options"></slot>
            </div>
        </div>
        
    </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String
})

const emit = defineEmits(['close'])

function onClose() {
    emit('close')
}
</script>

<style scoped>
.background {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: saturate(180%) blur(10px);
}

.modal-container {
    position: absolute;
    top: 50%;
    background-color: black;
    padding: 1rem;
    width: 20rem;
    transform: translate(-50%, -50%);
    left: 50%;
}
.options {
    display: flex;
    justify-content: space-around;
}
</style>