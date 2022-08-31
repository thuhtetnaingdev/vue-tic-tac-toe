<template>
    <Modal :reset="reset" />
    <div class="grid btn-container grid-nogutter">
        <div v-for="block in blocks" :key="block" class="col-4">
            <Button @click="clickHandler(block)" :class="colorBlock(block)" class="btn">
                <span :class="circleOrCross(block)" class="pi"></span>
            </Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex'
import Modal from '../Modal/index.vue';

const store = useStore()


type Possibilities = Array<number[]>

const turn = ref(true) // if true? first else second
const reset = () => { turn.value = true }

const blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const winBlocks: Possibilities = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

// computed player clicks
const playerOne = computed(() => store.getters.playerOneClicks)
const computer = computed(() => store.getters.computerClicks)

// func block
const colorBlock = (block: number) => ({ 'p-button-success': placeBlocks(block, true), 'p-button-help': placeBlocks(block, false), 'p-button-secondary': true })
const circleOrCross = (block: number) => ({ 'pi-circle': placeBlocks(block, true), 'pi-times': placeBlocks(block, false) })

const placeBlocks = (block: number, player: boolean) => {
    if (player) {
        return playerOne.value.includes(block)
    }
    return computer.value.includes(block)
    // return store.state.clicked[player].clicked.includes(block)
    // return playerClicks[index].clicked.includes(block)
}



// get all clicks
const allClick = computed(() => store.getters.allClicks)

const getRandomNum = () => Math.floor(Math.random() * 9 + 1)

watch(turn, (playerTurn) => {
    if (!playerTurn && !store.getters.getWinState) {

        setTimeout(() => {
            // console.log('------------start-------------')
            // console.log(allClick.value)
            let num = getRandomNum();
            // console.log({ firstNum: num })
            const checkInclude = () => allClick.value.includes(num)
            // console.log({ include: checkInclude() })
            while (checkInclude() && allClick.value.length < 9) {
                num = getRandomNum();
                // console.log({ loop: num })
            }

            !allClick.value.includes(num) && pushAndCheck(num)
            // console.log({ finalNum: num })
            // console.log('-------------end-------------')
        }, 500)
    }
})

function clickHandler(index: number): void {
    if (turn.value)
        pushAndCheck(index)
}

function pushAndCheck(index: number) {
    if (!allClick.value.includes(index)) {

        store.dispatch('addClicks', {
            player: turn.value,
            click: index
        })
        //checkPlayerClick
        checkWinOrDraw();
    }
}

function checkWinOrDraw() {
    const getClicked: [] = turn.value ? playerOne.value : computer.value
    let bolArray: boolean[] = [];

    winBlocks.forEach(blocks => {
        getClicked.forEach(value => {
            const check = blocks.find(b => b === value);
            if (check) {
                bolArray.push(true);
            }
        });
        if (bolArray.length < blocks.length) {
            bolArray = [];
        } else if (bolArray.every((v) => v === true)) {
            if (turn.value) {
                store.dispatch('updateStatus', { win: turn.value });
            } else {
                store.dispatch('updateStatus', { win: false })
            }
            bolArray = [];
        }
    });
    if (allClick.value.length === 9 && !store.getters.getWinState) {
        console.log('draw')
        store.dispatch('updateStatus', { draw: true })
    }
    // Update turn
    turn.value = !turn.value
}


</script>

<style scoped>
.btn {
    width: 150px !important;
    height: 150px;
    margin-top: 3px;
    font-size: 10rem !important;
}

.pi {
    margin: auto;
    font-size: 3.3rem;
}

@media only screen and (max-width: 600px) {
    .btn {
        width: 120px !important;
        height: 120px !important;
    }
}
</style>