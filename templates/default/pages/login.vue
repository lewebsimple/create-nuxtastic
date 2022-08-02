<script setup lang="ts">
const { isAuthenticated } = useAuth();
</script>

<template>
  <div id="login">
    <div v-if="isAuthenticated">
      <h1>Already logged in</h1>
    </div>
    <div v-else>
      <h1>Please log in</h1>
    </div>
  </div>
</template>
