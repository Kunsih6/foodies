<template>
  <div class="mobile-nav" @click.self="close">
    <div class="mobile-nav__content" @click="close">
      <div class="mobile-nav__container">
        <nuxt-link :to="{ name: 'index' }" class="mobile-nav__title">
          Foodies
        </nuxt-link>
        <nuxt-link
          class="mobile-nav__link"
          :to="{ name: 'index', hash: '#about' }"
        >
          Acerca de
        </nuxt-link>
        <nuxt-link
          class="mobile-nav__link"
          :to="{ name: 'index', hash: '#locations' }"
        >
          Restaurantes
        </nuxt-link>
        <nuxt-link :to="{ name: 'menu' }" class="mobile-nav__link"
          >Menú</nuxt-link
        >
        <nuxt-link
          class="mobile-nav__link"
          :to="{ name: 'index', hash: '#contact' }"
        >
          Contáctanose
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
<style lang="postcss" scoped>
.mobile-nav {
  @apply h-screen w-screen;
  &__container {
    @apply container mx-auto flex flex-col items-start;

    > *:not(:last-child) {
      @apply mb-8;
    }
  }
  &__content {
    @apply bg-white border-b border-opacity-10 border-white max-h-screen overflow-y-auto pb-24 pt-6 px-4 rounded-b-3xl shadow-lg;
  }

  &__link {
    @apply font-bold font-heading text-lg;
  }

  &__links {
    @apply my-12;
  }

  &__title {
    @apply font-title text-3xl text-black;
  }
}
</style>
