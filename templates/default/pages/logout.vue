<script setup lang="ts">
definePageMeta({ middleware: ["is-authenticated"] });
const { logout } = useAuth();
async function onLogout() {
  await logout();
  navigateTo("/");
}
</script>

<template>
  <div id="logout" class="">
    <h1>Are you sure you want to log out?</h1>
    <button type="button" class="btn-default" @click="onLogout">Logout</button>
  </div>
</template>
