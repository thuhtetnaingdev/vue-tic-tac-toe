<script lang="ts" setup>
import { computed } from 'vue';
import Dialog from 'primevue/dialog';
import { useStore } from 'vuex'

const props = defineProps<{ reset: () => void }>()

const store = useStore()

const headerStatus = computed(() => {
    if (store.getters.getDrawState) {
        return 'Draw'
    } else {
        const player = store.getters.getWinState ? 'Win' : 'Lose'
        return 'You ' + player
    }
})

function handleClick() {
    store.commit('resetClicks');
    store.commit('reset');
    props.reset()
}

</script>

<template>
    <Dialog :header="headerStatus" v-model:visible="store.state.win.status.modal" :modal="true" :draggable="false"
        :closable="false">
        <Button class="p-button-warning" @click="handleClick">Next</Button>
    </Dialog>
</template>

<style scoped>
.dialog {
    color: black;
}
</style>