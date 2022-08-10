<script setup lang="ts">
definePageMeta({ layout: "empty", middleware: ["is-not-authenticated"] });
</script>

<template>
  <div id="login" class="flex flex-col items-center gap-6 max-w-sm p-6 bg-white rounded-lg shadow">
    <h1 class="text-center">Please log in</h1>
    <FormLogin />
  </div>
</template>
