<template>
  <div class="app-wrapper bg-light-200 mx-auto border border-solid border-light-300 rounded-2xl">
    <ScoreCounter />
    <BlockieBoard />
  </div>
</template>

<script>
import BlockieBoard from './components/BlockieBoard.vue';
import ScoreCounter from './components/ScoreCounter.vue';

export default {
  name: 'App',
  components: {
    ScoreCounter,
    BlockieBoard
}
}
</script>

<style lang="scss">
body {
  font-family:var(--font-family);
}

.app-wrapper {
  max-width: 375px;
  height: 844px;
}
</style>
