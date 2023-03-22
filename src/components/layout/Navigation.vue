<template>
  <nav class="flex space-x-4 text-lg text-gray-500">
    <RouterLink
      to="/characters"
      class="link"
    >
      Characters
    </RouterLink>
    <RouterLink
      to="/favorites"
      class="link"
    >
      Favorites
    </RouterLink>
  </nav>
</template>

<style>
.link.active {
  color: white;
}
</style>
