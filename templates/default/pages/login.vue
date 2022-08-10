<script setup lang="ts">
definePageMeta({ middleware: ["is-not-authenticated"] });
</script>

<template>
  <div id="login" class="">
    <h1>Please log in</h1>
    <FormLogin />
  </div>
</template>
