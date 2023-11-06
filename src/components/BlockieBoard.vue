<template>
    <div class="mx-auto w-full max-w-xs flex flex-col gap-3">
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