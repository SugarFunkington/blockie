<template>
    <div class="text-gray-900 font-semibold float-right m-6 text-4xl">
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