<script setup lang="ts">
const { isAuthenticated } = useAuth();
</script>

<template>
  <div id="app-footer" class="bg-neutral-100 text-neutral-700 py-1.5">
    <div class="container flex justify-end items-center gap-6">
      <NuxtLink v-if="isAuthenticated" to="/logout" class="link-default"> Log out </NuxtLink>
      <NuxtLink v-else to="/login" class="link-default"> Log in </NuxtLink>
    </div>
  </div>
</template>
