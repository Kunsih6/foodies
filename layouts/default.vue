<template>
  <div class="layout">
    <LayoutNavbar class="layout__navbar" />
    <LayoutMobileMenu
      :class="{ 'layout__mobile-nav--open': mobileMenuShow }"
      class="layout__mobile-nav"
      @close="mobileMenuShow = false"
    />
    <LayoutMobileMenuTrigger
      v-model="mobileMenuShow"
      class="layout__menu-trigger"
      @toggle="mobileMenuShow = !mobileMenuShow"
    />
    <Nuxt />
    <LayoutFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuShow: false,
    }
  },
  head() {
    return {
      title: 'Foodies',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize(e) {
      this.mobileMenuShow = false
    },
  },
}
</script>
<style lang="postcss" scoped>
.layout {
  @apply relative;

  &__navbar {
    @apply absolute top-0 left-2/4 -translate-x-2/4 transform z-20;
  }

  &__menu-trigger {
    @apply fixed w-10 h-10 z-50 top-4 right-4;
  }

  &__mobile-nav {
    @apply fixed left-0 lg:hidden top-0 w-full z-40
      opacity-0
      origin-top
      transform scale-y-0 -translate-y-2/4
      transition-all duration-150;
    &--open {
      @apply opacity-100 transform scale-y-100 translate-y-0;
    }
  }
}
</style>
