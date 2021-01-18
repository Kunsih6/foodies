<template>
  <div class="mobile-nav" @click.self="close">
    <div class="mobile-nav__content" @click="close">
      <div class="mobile-nav__container">
        <span :to="{ name: 'index' }" class="mobile-nav__title"> Filtros </span>
        <span
          :class="{ 'mobile-nav__link--active': !currentCategory }"
          class="mobile-nav__link"
          @click="$emit('change', null)"
        >
          Todas
        </span>
        <span
          v-for="(c, i) in categories"
          :key="i"
          :class="{ 'mobile-nav__link--active': currentCategory === c.id }"
          class="mobile-nav__link"
          @click="$emit('change', c.id)"
        >
          {{ c.name }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    currentCategory: {
      default: null,
      required: false,
      type: null,
    },
    categories: {
      default: () => [],
      required: true,
      type: Array,
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
<style lang="postcss" scoped>
.mobile-nav {
  @apply h-screen w-screen text-white;

  &__container {
    @apply container mx-auto flex flex-col items-start relative;

    > *:not(:last-child) {
      @apply mb-8;
    }
  }
  &__content {
    @apply bg-black border-b border-opacity-10 border-white max-h-screen overflow-y-auto pb-24 pt-6 px-4 rounded-b-3xl shadow-lg;
  }

  &__link {
    @apply font-bold font-heading text-lg relative z-0;

    &::before {
      @apply w-full bg-primary h-0 bottom-1 absolute -z-10 left-0 transition-all duration-150;

      content: '';
    }
  }
  &__link--active {
    &::before {
      @apply h-2;
    }
  }

  &__links {
    @apply my-12;
  }

  &__title {
    @apply font-title text-3xl text-primary;
  }
}
</style>
