<template>
  <div id="default-layout" class="min-h-screen flex flex-col">
    <header class=""></header>
    <main class="flex-grow">
      <slot />
    </main>
    <footer class="">
      <AppFooter />
    </footer>
  </div>
</template>
