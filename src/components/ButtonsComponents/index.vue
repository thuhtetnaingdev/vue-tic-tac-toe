<template>
    <div class="grid btn-container grid-nogutter">
        <div v-for="block in blocks" :key="block" class="col-4">
            <Button @click="clickHandler(block)"
                :class="{ 'p-button-success': placeBlocks(block, 'playerOne'), 'p-button-help': placeBlocks(block, 'playerTwo'), 'p-button-secondary': true }"
                class="btn">
                <span
                    :class="{ 'pi-circle': placeBlocks(block, 'playerOne'), 'pi-times': placeBlocks(block, 'playerTwo') }"
                    class="pi"></span>
                <!-- pi pi-circle -->
                <!-- pi-times -->
            </Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

type Possibilities = Array<number[]>

const turn = ref(true) // if true? first else second

const blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const winBlocks: Possibilities = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

const placeBlocks = (block: number, player: 'playerOne' | 'playerTwo') => {
    return store.state.clicked[player].clicked.includes(block)
    // return playerClicks[index].clicked.includes(block)
}

//computed player clicks
const playerOne = computed(() => store.getters.playerOneClicks)
const playerTwo = computed(() => store.getters.playerTwoClicks)

function clickHandler(index: number): void {
    const player = turn.value ? 'One' : 'Two'

    const allClick = () => [...playerOne.value, ...playerTwo.value]

    if (!allClick().find(click => click === index)) {

        store.dispatch('addClicks', {
            player: player,
            click: index
        })

        const getClicked: [] = turn.value ? playerOne.value : playerTwo.value

        let bolArray: boolean[] = []
        winBlocks.forEach(blocks => {
            getClicked.forEach(value => {
                const check = blocks.find(b => b === value)
                if (check) {
                    bolArray.push(true)
                }
            })
            if (bolArray.length < 3) {
                bolArray = []
            } else if (bolArray.every((v) => v === true)) {
                console.log(bolArray.length)
                store.dispatch('updateStatus', { win: true, player })
                bolArray = [];
            }
        })

        if (allClick().length === 9 && !store.getters.getWinState) {
            store.dispatch('updateStatus', { win: false, player })
        }

        // Update turn
        turn.value = !turn.value
    }


}


</script>

<style scoped>
.btn-container {
    width: 460px;
    margin: auto;
}

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

</style>