<template>
<header>
  <RouterLink class="home-navigation" :to="{ name:'home' }"><h1>John WJ Ferguson</h1></RouterLink>

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
  gap: var(--spacing-md);
}

.home-navigation {
  flex: 0 1 10rem;

  &:hover {
    border-bottom: var(--spacing-xs) solid transparent;
  }

  & h1 {
    line-height: 1.12;
  }
}

nav {
  display: flex;
  align-items: end;
  flex-direction: column;
  margin-left: auto;
  text-align: right;
}

@media (min-width: 1000px) {
  .home-navigation {
    flex: 0 1 auto;
  }

  nav {
    flex-direction: row;
    gap: var(--spacing-md);
  }
}
</style>
