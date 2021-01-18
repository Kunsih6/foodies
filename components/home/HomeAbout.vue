<template>
  <section id="about" class="about">
    <div class="about__image-wrapper">
      <figure class="about__image">
        <img src="~/assets/images/diner.png" alt="about" />
        <figcaption class="about__image-description">
          La comida es <span>nuestro arte</span>
        </figcaption>
      </figure>
    </div>
    <div class="about__content">
      <div class="about__content-wrapper">
        <Decorator class="about__decorator" />
        <div class="about__container">
          <div>
            <h2 class="about__title" data-aos="fade-up">¿Quién es Foodies?</h2>
            <p class="about__info">
              Elit irure ad nulla id elit laborum nostrud mollit irure. Velit
              reprehenderit sunt nulla enim aliquip duis tempor est culpa fugiat
              consequat culpa consectetur Lorem. Reprehenderit dolore culpa
              irure eiusmod minim occaecat et id minim ullamco.
            </p>
            <ButtonNavigation @click.native="scrollTo('contact')">
              Contáctanos
            </ButtonNavigation>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Decorator from '~/assets/svg/decorator-about.svg?inline'
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
.about {
  &__container {
    @apply container mx-auto;
  }

  &__content {
    @apply relative;
  }

  &__decorator {
    @apply -top-16 -translate-x-1/2 -z-10 absolute h-about-decorator hidden left-1/2 stroke-current text-primary transform w-full;
  }

  &__image {
    @apply mb-16 pt-96 relative w-full;

    &-description {
      @apply container font-bold font-title leading-none mx-auto pb-8 text-4xl text-right text-white uppercase;

      span {
        @apply text-primary;
      }
    }

    img {
      @apply -z-10 absolute h-full left-0 object-cover object-left top-0 w-full;
    }
  }

  &__info {
    @apply font-text1 mb-6 text-gray-400;
  }

  &__title {
    @apply font-heading mb-6 text-xl;
  }
}

@screen md {
  .about {
    &__decorator {
      @apply block;
    }
  }
}

@screen xl {
  .about {
    @apply relative;

    &__content {
      @apply absolute container mx-auto left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 w-full;
    }

    &__content-wrapper {
      @apply ml-auto relative w-6/12;
    }

    &__image-description {
      @apply w-8/12 mr-4 ml-auto;
    }

    &__image-wrapper {
      @apply w-6/12;
    }
  }
}
</style>
