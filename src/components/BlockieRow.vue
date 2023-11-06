<template>
    <div class="flex w-full justify-between">
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