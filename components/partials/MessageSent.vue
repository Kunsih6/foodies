<template>
  <div class="message">
    <div class="message__container">
      <Icon />
      <p class="message__title">Gracias por tus comentarios</p>
      <p class="message__text">
        Don't miss out on our great offers & Receive deals from all our top
        restaurants via e-mail.
      </p>
      <nuxt-link :to="{ name: 'menu' }" class="button-action" type="button">
        Conoce nuestro menú
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Icon from '~/assets/svg/message-sent.svg?inline'

export default {
  components: {
    Icon,
  },
}
</script>

<style lang="postcss" scoped>
.message {
  @apply bg-black text-center text-white;

  &__container {
    @apply container mx-auto max-w-2xl flex items-center justify-center flex-col;
  }

  &__title {
    @apply font-title font-bold text-4xl mb-4 mt-8;
  }

  &__text {
    @apply font-text1 text-lg md:text-2xl mb-6;
  }
}
</style>
