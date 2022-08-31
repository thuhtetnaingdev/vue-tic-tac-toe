<template>
    <div class="text container">
        <form @submit="handleSubmit">
            <div class="card-color">
                <div class="inner-container" style="text-align: center;">
                    <p class="text child">Enter Your Name</p>
                    <InputText class="child input-text" placeholder="Input your name" v-model="input" />
                    <div>
                        <Button :disabled="input.trim().length < 1" type="submit"
                            class="p-button-warning btn">Enter</Button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const input = ref('')
const store = useStore()
const router = useRouter();


function handleSubmit(e: any) {
    e.preventDefault()
    router.push('/')
    store.dispatch('updateUsername', input.value)
}

</script>

<style scoped>
.container {
    width: 300px;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
}

.inner-container {
    padding: 20px 10px;
}

.input-text {
    background-color: #17202A;
    width: 90%;
    height: 44px;
    border: none;
    outline: none;
    padding: 1rem;
    color: white;
    border-radius: 25px;
}

.btn {
    padding: 10px 25px;
    border-radius: 30px;
}

.card-color {
    background-color: #2D415D;
}

.text {
    font-size: 1.2rem;
}

.child {
    margin-bottom: 1rem;
}
</style>

