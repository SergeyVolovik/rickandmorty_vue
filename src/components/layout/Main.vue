<template>
  <main class="main mt-12 mb-16 relative">
    <slot />
  </main>
</template>

<style scoped>
.main {
  min-height: calc(100vh - (76px + 48px + 64px + 98px));
}
</style>
