<template>
  <section class="app">
    <img class="app__image" src="~/assets/images/phone.png" alt="phone" />
    <div class="app__container">
      <div class="app__info">
        <h2 class="app__title" data-aos="fade-up">
          Obten más beneficios <br />
          <span class="title-decorator">Descarga nuestra App</span>
        </h2>
        <div class="app__steps">
          <LeftArrow class="app__arrow app__arrow--left" />
          <RighttArrow class="app__arrow app__arrow--right" />
          <div class="app__step app__step--1">
            <span class="app__step-number">01</span>
            <p class="app__step-title">Solicita rápido</p>
            <p class="app__step-description">
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </p>
          </div>
          <div class="app__step app__step--2">
            <span class="app__step-number">02</span>
            <p class="app__step-title">Solicita rápido</p>
            <p class="app__step-description">
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </p>
          </div>
          <div class="app__step app__step--3">
            <span class="app__step-number">03</span>
            <p class="app__step-title">Solicita rápido</p>
            <p class="app__step-description">
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LeftArrow from '~/assets/svg/app-arrow-left.svg?inline'
import RighttArrow from '~/assets/svg/app-arrow-right.svg?inline'

export default {
  components: {
    LeftArrow,
    RighttArrow,
  },
}
</script>

<style lang="postcss" scoped>
.app {
  @apply -mt-56 relative lg:-mt-32;

  &__arrow {
    @apply absolute -z-10 hidden md:block;

    &--left {
      width: 34%;
      left: 84px;
      top: 0;
      height: 65%;
    }

    &--right {
      width: 34%;
      right: 84px;
      top: 0;
      height: 65%;
    }
  }

  &__container {
    @apply container mx-auto;
  }

  &__step {
    @apply text-center font-text2 px-8 w-full flex flex-col justify-center items-center max-w-sm md:w-6/12;

    &-number {
      @apply w-4 h-4 rounded-full text-white bg-primary p-5 flex justify-center items-center;
    }

    &-title {
      @apply font-bold mb-4;
    }

    &:not(:last-child) {
      @apply mb-16;
    }
  }

  &__steps {
    @apply flex flex-wrap items-center justify-center relative;
  }

  &__title {
    @apply relative font-title font-bold text-2xl md:text-4xl text-center mb-12;
  }

  &__image {
    @apply w-full -mb-16 lg:absolute top-0 left-0 lg:w-7/12 max-w-4xl;
  }

  &__info {
    @apply max-w-2xl lg:w-6/12 ml-auto lg:pt-40;
  }
}
</style>
