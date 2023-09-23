<template>
<header>
  <RouterLink  class="home-navigation" :to="{ name:'home' }"><h1>John Ferguson<br>Architect</h1></RouterLink>

  <nav>
    <RouterLink :to="{ name:'work-index' }"><h1>Work</h1></RouterLink>
    <RouterLink :to="{ name:'information' }"><h1>Information</h1></RouterLink>
  </nav>
</header>
</template>

<style scoped lang="postcss">
header {
  display: flex;
  align-items: start;
  padding: var(--spacing-md);
  background-color: var(--color-bg-light);
}

a {
  color: black;
  text-decoration: none;

  &:hover {
    border-bottom: var(--spacing-xs) solid black;
  }

  &.home-navigation:hover {
    border: none;
  }
}

nav {
  display: flex;
  gap: var(--spacing-md);
  margin-left: auto;
}
</style>
