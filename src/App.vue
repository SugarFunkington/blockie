<template>
  <div class="app-wrapper">
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
  background-color:var(--main-bg);
  font-family:var(--font-family);
}

.app-wrapper {
  max-width: 375px;
  height: 844px;
  margin:auto;
  border:1px solid var(--off-white-3);
  border-radius:15px;
}
</style>
