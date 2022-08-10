<script setup lang="ts">
definePageMeta({ layout: "empty" });
const { auth, logout } = useAuth();
async function onLogout() {
  await logout();
  navigateTo("/");
}
if (!auth.value.user) {
  navigateTo("/");
}
</script>

<template>
  <div id="logout" class="flex flex-col items-center gap-6 max-w-sm p-6 bg-white rounded-lg shadow">
    <h1 class="text-center">Really log out?</h1>
    <button type="button" class="btn-default w-full" @click="onLogout">Logout</button>
  </div>
</template>
