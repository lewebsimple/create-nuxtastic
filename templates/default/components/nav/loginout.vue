<script setup lang="ts">
const { isAuthenticated } = useAuth();
</script>

<template>
  <NuxtLink v-if="isAuthenticated" to="/logout" class="link-default"> Log out </NuxtLink>
  <NuxtLink v-else to="/login" class="link-default"> Log in </NuxtLink>
</template>
