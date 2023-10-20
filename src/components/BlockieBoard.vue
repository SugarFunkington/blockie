<template>
    <div class="board">
        <BlockieRow v-for="n in 6"/>
    </div>
</template>

<script>
import BlockieRow from './BlockieRow.vue';

export default {
    name: 'BlockieBoard',
    components: {
        BlockieRow,
    }
}
</script>

<style>
.board {
    margin:auto;
    width:340px;
    display:flex;
    flex-direction: column;
    gap: 10px;
}
</style>