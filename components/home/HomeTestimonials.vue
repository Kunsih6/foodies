<template>
  <section class="comments">
    <Decorator class="comments__decorator comments__decorator--left" />
    <div class="comments__container">
      <client-only>
        <carousel
          v-model="currentSlider"
          :per-page="1"
          :pagination-enabled="false"
          class="w-full"
        >
          <slide v-for="(slide, i) in slides" :key="i">
            <div class="comments__item">
              <p class="comments__main" data-aos="fade-up">
                "{{ slide.main }}"
              </p>
              <p class="comments__secondary">"{{ slide.secondary }}"</p>
            </div>
          </slide>
        </carousel>
      </client-only>
      <div v-if="slides.length > 1" class="comments__slider-controls">
        <ArrowLeft class="comments__slider-control" @click="prevSlide()" />
        {{ currentSlider + 1 }} / {{ slides.length }}
        <ArrowRight class="comments__slider-control" @click="nextSlide()" />
      </div>
    </div>
    <img
      class="comments__decorator-image"
      src="~/assets/images/ketchup.png"
      alt="ketchup"
    />
    <Decorator class="comments__decorator comments__decorator--right" />
  </section>
</template>

<script>
import ArrowLeft from '~/assets/svg/slider-arrow-left.svg?inline'
import ArrowRight from '~/assets/svg/slider-arrow-right.svg?inline'
import Decorator from '~/assets/svg/decorator-testimonial.svg?inline'

export default {
  components: {
    ArrowLeft,
    ArrowRight,
    Decorator,
  },
  data() {
    return {
      currentSlider: 0,
      slides: [
        {
          main: 'El mejor lugar para degustar en familia y amigos!',
          secondary:
            'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera. 1',
        },
        {
          main: 'El mejor lugar para degustar en familia y amigos!',
          secondary:
            'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera. 2',
        },
        {
          main: 'El mejor lugar para degustar en familia y amigos!',
          secondary:
            'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera. 3',
        },
        {
          main: 'El mejor lugar para degustar en familia y amigos!',
          secondary:
            'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera. 4',
        },
        {
          main: 'El mejor lugar para degustar en familia y amigos!',
          secondary:
            'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera. 5',
        },
      ],
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlider + 1 < this.slides.length) {
        this.currentSlider += 1
      }
    },
    prevSlide() {
      if (this.currentSlider - 1 >= 0) {
        this.currentSlider -= 1
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.comments {
  @apply relative md:py-32 overflow-hidden;

  &__container {
    @apply container mx-auto flex justify-center items-center flex-col;

    min-height: 50vh;
  }

  &__decorator {
    @apply hidden absolute text-secondary fill-current w-24 md:w-32 lg:w-48 xl:w-64;

    &--left {
      @apply transform rotate-180 left-0 top-0;
    }

    &--right {
      @apply right-0 bottom-0;
    }
  }

  &__decorator-image {
    @apply hidden;
  }

  &__item {
    @apply text-center max-w-2xl mx-auto;
  }

  &__main {
    @apply font-title text-xl font-bold mb-4 md:text-3xl;
  }

  &__secondary {
    @apply font-text1 text-base text-gray-400 w-10/12 mx-auto;
  }

  &__slider-control {
    @apply fill-current w-2 hover:text-primary cursor-pointer;

    &:first-child {
      @apply mr-3;
    }

    &:last-child {
      @apply ml-3;
    }
  }

  &__slider-controls {
    @apply flex justify-center items-center mt-10 font-heading;
  }
}

@screen md {
  .comments {
    &__decorator {
      @apply block;
    }
  }
}

@screen xl {
  .comments {
    &__decorator-image {
      @apply block absolute -right-16 top-0 z-10;
    }
  }
}
</style>
