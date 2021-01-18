<template>
  <button
    :are-expanded="value"
    :class="{ 'menu--opened': value }"
    aria-label="Main Menu"
    class="menu"
    @click="$emit('toggle')"
  >
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      <path
        class="menu__line menu__line--1"
        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
      />
      <path class="menu__line menu__line--2" d="M 20,50 H 80" />
      <path
        class="menu__line menu__line--3"
        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
      />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    value: {
      default: false,
      required: true,
      type: Boolean,
    },
  },
}
</script>

<style lang="postcss" scoped>
.menu {
  @apply cursor-pointer bg-transparent outline-none flex lg:hidden p-0;

  &__line {
    @apply stroke-current text-black stroke-6;

    fill: none;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);

    &--1 {
      stroke-dasharray: 60 207;
    }

    &--2 {
      stroke-dasharray: 60 60;
    }

    &--3 {
      stroke-dasharray: 60 207;
    }
  }

  &--opened &__line--1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
  }

  &--opened &__line--2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
  }

  &--opened &__line--3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
  }
}
</style>
