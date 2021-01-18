<template>
  <header class="hero">
    <div class="hero__container">
      <Decorator class="hero__decorator" />
      <img
        class="hero__image"
        src="~/assets/images/hero_hamburger_2.png"
        alt="hamburger"
      />
      <h1 class="hero__title">
        Cada sabor <br />
        es una nueva <br />
        <span class="title-decorator"> experiencia </span>
      </h1>
    </div>
  </header>
</template>

<script>
import Decorator from '~/assets/svg/menu-hero.svg?inline'

export default {
  components: {
    Decorator,
  },
}
</script>

<style lang="postcss" scoped>
.hero {
  @apply bg-black relative overflow-hidden;

  &__container {
    @apply container mx-auto min-h-menu-hero flex justify-end flex-col py-32 lg:pb-12 md:flex-row-reverse md:justify-between md:items-center;
  }

  &__decorator {
    @apply text-primary fill-current absolute h-full;

    right: -28rem;
    top: -12rem;
  }

  &__image {
    @apply mb-16 md:w-6/12 lg:mt-24 lg:mb-0 z-10;
  }

  &__title {
    @apply font-bold font-title text-white text-3xl md:text-4xl xl:text-6xl z-10 md:w-6/12;
  }
}

@screen md {
  .hero {
    &__decorator {
      top: -10rem;
      right: -62rem;
      height: 150%;
    }
  }
}

@screen lg {
  .hero {
    &__decorator {
      top: -12rem;
      right: -64rem;
      height: 150%;
    }
  }
}

@screen xl {
  .hero {
    &__decorator {
      top: -12rem;
      right: -32rem;
      height: 150%;
    }
  }
}
</style>
