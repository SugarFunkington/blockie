<template>
    <div class="score-wrapper">
        <h2>{{  scoreCount }}</h2>
    </div>
</template>

<script>
export default {
    name: 'ScoreCounter',
    computed: {
        scoreCount() {
            return 0
        }
    }
}
</script>

<style scoped>
h2 {
    font-family: var(--font-family);
    font-size:2.25rem;
    float:right;
}

.score-wrapper {
    margin-right:24px;
}
</style>