<template>
  <main class="menu">
    <MenuHero class="menu__hero" />
    <MenuSearch class="menu__search" />
    <div v-show="dishes.length > 0" class="menu__container">
      <div id="dishes" class="menu__dishes">
        <MenuCard
          v-for="(dish, i) in dishes"
          :key="i"
          :name="dish.name"
          :image="dish.image"
          :description="dish.description"
          :category="dish.category"
          :price="dish.price"
        />
      </div>
      <client-only>
        <Pagination
          :current-page="meta.current_page"
          :show="4"
          :total-pages="meta.last_page"
          @change="changePage"
        />
      </client-only>
    </div>
    <DishNotFound v-show="dishes.length === 0" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import scrollTo from '~/usables/scroll-to'

export default {
  name: 'Menu',
  computed: {
    ...mapGetters({
      dishes: 'menu/getList',
      meta: 'menu/getMeta',
    }),
  },
  watch: {
    dishes() {
      scrollTo('dishes')
    },
  },
  methods: {
    changePage(p) {
      this.$store.dispatch('menu/changePage', p)
    },
  },
}
</script>

<style lang="postcss" scoped>
.menu {
  @apply bg-gray-200 pb-32;

  &__dishes {
    @apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center w-full pb-16;
  }

  &__container {
    @apply container mx-auto w-full;
  }
}
</style>
