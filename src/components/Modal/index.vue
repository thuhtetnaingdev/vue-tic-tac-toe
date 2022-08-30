<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import Dialog from 'primevue/dialog';
import { useStore } from 'vuex'

const store = useStore()

const headerStatus = computed(() => {
    if (store.getters.getDrawState) {
        return 'Draw'
    } else {
        return 'Player ' + store.state.win.status.player + ' Win'
    }
})

function handleClick() {
    store.commit('resetClicks')
    store.commit('reset')
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