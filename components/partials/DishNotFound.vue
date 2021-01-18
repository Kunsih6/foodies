<template>
  <div class="error">
    <div class="error__container">
      <Icon class="error__icon" />
      <p class="error__message">¡Platillo no encontrado!</p>
      <p class="error__text">
        Te invitamos a que verifiques si el nombre esta bien escrito o prueba
        buscando un nuevo platillo.
      </p>
    </div>
  </div>
</template>

<script>
import Icon from '~/assets/svg/dish-404.svg?inline'

export default {
  components: {
    Icon,
  },
}
</script>

<style lang="postcss" scoped>
.error {
  @apply bg-gray-200 py-48;

  &__container {
    @apply container mx-auto flex justify-center items-center flex-col;
  }

  &__icon {
    @apply w-full max-w-sm;
  }

  &__message {
    @apply text-xl font-heading font-bold mt-10 max-w-xs text-center;
  }

  &__text {
    @apply text-lg font-text1;
  }
}
</style>
