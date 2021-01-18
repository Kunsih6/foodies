<template>
  <div :class="{ 'navbar--dark': $route.path === '/menu' }" class="navbar">
    <div class="navbar__container">
      <nuxt-link :to="{ name: 'index' }" class="navbar__title">
        Foodies
      </nuxt-link>
      <nav class="navbar__links">
        <nuxt-link class="navbar__link" :to="{ name: 'index', hash: '#about' }">
          Acerca de
        </nuxt-link>
        <nuxt-link
          class="navbar__link"
          :to="{ name: 'index', hash: '#locations' }"
        >
          Restaurantes
        </nuxt-link>
        <nuxt-link :to="{ name: 'menu' }" class="navbar__link">Menú</nuxt-link>
        <nuxt-link
          class="navbar__link"
          :to="{ name: 'index', hash: '#contact' }"
        >
          Contáctanos
        </nuxt-link>
      </nav>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.navbar {
  @apply w-full;

  &--dark {
    @apply text-white;
  }

  &__container {
    @apply container mx-auto py-4 w-full flex items-center justify-start;
  }

  &__link {
    @apply font-bold font-heading relative px-4 text-center;

    &::before {
      @apply w-full bg-primary h-0 bottom-0 absolute -z-10 left-0 transition-all duration-150;

      content: '';
    }
  }

  &__link:hover::before {
    @apply h-2;
  }

  &__links {
    @apply hidden;
  }

  &__title {
    @apply font-title font-bold text-xl;
  }
}

@screen lg {
  .navbar {
    &__links {
      @apply block ml-24;
    }

    &__link {
      &:not(:last-child) {
        @apply mr-10;
      }
    }
  }
}
</style>
