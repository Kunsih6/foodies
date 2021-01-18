<template>
  <article :class="{ 'card--active': active }" class="card">
    <p class="card__name">{{ name }}</p>
    <p class="card__schedule">
      Abierto de {{ openAt | hour }} - {{ closeAt | hour }}
    </p>
    <p class="card__address">{{ address }}</p>
  </article>
</template>

<script>
export default {
  props: {
    active: {
      default: false,
      required: false,
      type: Boolean,
    },
    name: {
      default: () => '',
      required: true,
      type: String,
    },
    openAt: {
      default: () => '',
      required: true,
      type: String,
    },
    closeAt: {
      default: () => '',
      required: true,
      type: String,
    },
    address: {
      default: () => '',
      required: true,
      type: String,
    },
  },
}
</script>

<style lang="postcss" scoped>
.card {
  @apply border-2 border-black cursor-pointer duration-150 px-6 py-10 rounded-xl transition-all;

  &--active {
    @apply bg-location-card border-transparent;
  }
}

@media (hover: hover) and (pointer: fine) {
  .card {
    &:hover {
      @apply bg-location-card border-transparent;
    }
  }
}
</style>
