<script lang="ts" setup>
import ButtonsComponents from '../components/ButtonsComponents/index.vue';
import PlayerScore from '../components/PlayerScore/index.vue';

</script>
<template>
    <div class="container">
        <h1 style="text-align: center;">Tic Tac Toe 1</h1>
        <PlayerScore style="margin-bottom: 0.7rem;" />
        <ButtonsComponents />
    </div>
</template>

<style scoped>
h1 {
    color: white;
    margin: 16px 0;
}

.container {
    width: 460px;
    margin: auto;
}

@media only screen and (max-width: 600px) {
    .container {
        width: 370px;
    }
}
</style>