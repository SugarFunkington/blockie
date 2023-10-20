<template>
    <div class="row">
        <BlockiePiece v-for="n in 5"/>
    </div>
</template>

<script>
import BlockiePiece from './BlockiePiece.vue';

export default {
    name: 'BlockieRow',
    components: {
        BlockiePiece,
    }
}
</script>

<style lang="scss" scoped>
.row {
    display:flex;
    gap: 10px;
    width:100%;
}
</style>