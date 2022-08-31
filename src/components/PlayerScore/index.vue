<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const username = computed(() => store.getters.getUsername)
const playerScores = computed(() => store.getters.getPlayerScores)
const computerScores = computed(() => store.getters.getComputerScores)

</script>
<template>
    <div class="text">
        <p>
            {{ username }}: <span class="pi pi-circle text"></span> <span class="score">scores: {{ playerScores
            }}</span>
        </p>
        <p>
            Computer: <span class="pi pi-times text"></span> <span class="score">scores: {{ computerScores }}</span>
        </p>
    </div>
</template>
<style scoped>
.score {
    margin-left: 10px;
}
</style>