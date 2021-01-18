<template>
  <div class="error">
    <div class="error__container">
      <Icon class="error__icon" />
      <p class="error__message">¡No hemos encontrado lo que buscas!</p>
    </div>
  </div>
</template>

<script>
import Icon from '~/assets/svg/search-404.svg?inline'

export default {
  components: {
    Icon,
  },
}
</script>

<style lang="postcss" scoped>
.error {
  &__container {
    @apply container mx-auto flex justify-center items-center flex-col;
  }

  &__icon {
    @apply w-full max-w-sm;
  }

  &__message {
    @apply text-xl font-heading font-bold mt-10 max-w-xs text-center;
  }
}
</style>
