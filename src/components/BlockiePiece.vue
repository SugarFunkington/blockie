<template>
    <div class="blockie-piece"></div>
</template>

<script>
export default {
    name: 'BlockiePiece',
}
</script>

<style>
.blockie-piece {
    background-color:var(--piece-default);
    width:60px;
    height:60px;
    border-radius:16px;
    box-shadow:var(--shadow-default);
    display:inline-block;
    cursor: pointer;
}
</style>