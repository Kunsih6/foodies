<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__top">
        <h2 class="footer__title">Foodies</h2>
        <img src="~/assets/images/ios.png" alt="ios" />
        <img src="~/assets/images/android.png" alt="ios" />
      </div>
      <nav class="footer__bottom">
        <a href="#">Conoce nuestras sucursales</a>
        <a href="#">Acerca de</a>
        <a href="#">Conoce nuestras sucursales</a>
        <a href="#">¿Qué hablan de nosotros?</a>
        <a href="#">Contactanos</a>
      </nav>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
.footer {
  @apply py-16 lg:py-32;

  &__container {
    @apply container mx-auto;
  }

  &__top {
    @apply py-6 border-b-2 border-primary mb-6 flex flex-col justify-center items-center md:flex-row;

    img:not(:last-child) {
      @apply mb-4  md:mb-0 md:mr-4;
    }
  }

  &__bottom {
    @apply flex flex-col justify-center items-center md:flex-row md:flex-wrap md:justify-start;

    > * {
      @apply md:w-4/12 text-center text-gray-400 font-text2 lg:w-auto lg:text-left;
    }

    > *:not(:last-child) {
      @apply mb-4 lg:mb-0 lg:mr-12;
    }
  }

  &__title {
    @apply font-title text-gray-400 font-bold text-2xl mb-4 md:flex-1;
  }
}
</style>
