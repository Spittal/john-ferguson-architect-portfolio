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
  padding: var(--spacing-md);
  background-color: var(--color-bg-light);

  & .home-navigation {
    margin-bottom: var(--spacing-md);
  }
}

a {
  &.home-navigation:hover {
    border: none;
    padding-bottom: var(--spacing-xs);
  }
}

nav {
  display: flex;
  flex-direction: column;
  align-items: start;
}

@media (min-width: 1000px) {
  header {
    display: flex;
    align-items: start;

    & .home-navigation {
      margin-bottom: 0;
    }
  }

  nav {
    flex-direction: row;
    gap: var(--spacing-md);
    margin-left: auto;
  }
}
</style>
