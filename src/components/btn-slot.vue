<script setup lang="ts">
</script>
<template>
  <div>
    <button type="button">
        <slot name="btn"> 你看我行不行</slot>
    </button>
    <slot name="text" class="text"> 都是这样的</slot>
  </div>
</template>

<style scoped>
.text {
    color: brown;
}

</style>