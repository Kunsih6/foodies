<template>
  <button class="navigation" type="button">
    <slot />
    <Arrow class="navigation__arrow" />
  </button>
</template>
<script>
import Arrow from '~/assets/svg/arrow-right.svg?inline'

export default {
  components: {
    Arrow,
  },
}
</script>
<style lang="postcss" scoped>
.navigation {
  @apply flex items-center font-heading font-bold text-xl outline-none;

  &__arrow {
    @apply ml-2;
  }
}

@media (hover: hover) and (pointer: fine) {
  .navigation {
    &:hover &__arrow {
      animation: hover 1.5s infinite linear forwards;
    }
  }
}

@keyframes hover {
  50% {
    @apply ml-4;
  }
}
</style>
