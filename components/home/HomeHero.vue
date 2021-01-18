<template>
  <header class="hero">
    <Decorator class="hero__decorator" />
    <div class="hero__container">
      <img
        class="hero__image"
        src="~/assets/images/hero_hamburger.png"
        alt="Hero image"
      />
      <div class="hero__info">
        <h1 class="hero__title">
          Un nuevo <br />
          sabor esta en <br />
          <span class="title-decorator">la ciudad</span>
        </h1>
        <p class="hero__content">
          Estamos a punto de descubrir un mundo lleno de sabores y de emociones
          inigualables.
        </p>
        <ButtonNavigation
          class="hero__action"
          @click.native="scrollTo('locations')"
        >
          Encuentranos
        </ButtonNavigation>
      </div>
    </div>
  </header>
</template>
<script>
import Decorator from '~/assets/svg/home-hero.svg?inline'
import scrollTo from '~/usables/scroll-to'

export default {
  components: {
    Decorator,
  },
  methods: {
    scrollTo,
  },
}
</script>
<style lang="postcss" scoped>
.hero {
  @apply relative w-full;

  &__action {
    @apply mt-12;
  }

  &__container {
    @apply container mx-auto pt-32;
  }

  &__content {
    @apply text-gray-400 mt-8 font-text1;
  }

  &__decorator {
    @apply -z-10
    -top-12
    absolute
    fill-current
    h-4/6
    right-0
    text-primary
    w-95/100;
  }

  &__image {
    @apply mx-auto w-11/12;
  }

  &__title {
    @apply font-title font-bold leading-tight text-4xl mt-16;
  }
}

@screen md {
  .hero {
    &__container {
      @apply flex flex-row-reverse justify-between items-center pt-36;
    }

    &__content {
      @apply w-10/12;
    }

    &__decorator {
      @apply h-home-decorator top-0 w-8/12;
    }

    &__image {
      @apply w-6/12;
    }
  }
}

@screen lg {
  .hero {
    &__content {
      @apply text-lg;
    }

    &__decorator {
      @apply -top-20 w-8/12;
    }

    &__image {
      @apply w-7/12;
    }

    &__title {
      @apply text-5xl;
    }
  }
}

@screen xl {
  .hero {
    &__content {
      @apply text-xl w-8/12;
    }

    &__decorator {
      @apply w-7/12;
    }

    &__image {
      @apply w-6/12;
    }

    &__title {
      @apply text-6xl;
    }
  }
}
</style>
