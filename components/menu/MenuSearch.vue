<template>
  <div class="search">
    <div class="search__container">
      <label class="search__input">
        <SearchIcon class="search__input-icon" />
        <input
          v-model="query"
          type="text"
          placeholder="Busca tu platillo favorito..."
        />
      </label>
      <SettingsIcon
        class="search__settings-icon"
        @click="showMenuMobile = true"
      />
      <ul class="search__categories">
        <li
          :class="{ 'search__category--active': !category }"
          class="search__category"
          @click="changeCategory(null)"
        >
          Todas
        </li>
        <li
          v-for="(c, i) in categories"
          :key="i"
          :class="{ 'search__category--active': category === c.id }"
          class="search__category"
          @click="changeCategory(c.id)"
        >
          {{ c.name }}
        </li>
      </ul>
    </div>
    <MenuMobileSettings
      :current-category="category"
      :categories="categories"
      :class="{ 'search__mobile-settings--open': showMenuMobile }"
      class="search__mobile-settings"
      @close="showMenuMobile = false"
      @change="changeCategory"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import debounce from 'lodash/debounce'
import SearchIcon from '~/assets/svg/search.svg?inline'
import SettingsIcon from '~/assets/svg/settings.svg?inline'

export default {
  components: {
    SearchIcon,
    SettingsIcon,
  },
  data() {
    return {
      showMenuMobile: false,
      category: null,
      query: null,
    }
  },
  async fetch() {
    if (this.categories.length === 0) {
      await this.$store.dispatch('categories/fetch')
    }

    await this.$store.dispatch('menu/fetch', {
      category: this.category,
      query: this.query,
      page: this.currentPage,
    })
  },
  computed: {
    ...mapGetters({
      categories: 'categories/getList',
      currentPage: 'menu/getPage',
    }),
  },
  watch: {
    currentPage() {
      this.search()
    },
    query() {
      this.search()
    },
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize(e) {
      this.showMenuMobile = false
    },
    changeCategory(id) {
      this.category = id
      this.search()
    },
    search: debounce(
      function () {
        this.$fetch()
      },
      100,
      { maxWait: 1500 }
    ),
  },
}
</script>

<style lang="postcss" scoped>
.search {
  &__category {
    @apply font-bold font-title text-base cursor-pointer relative z-10;

    &:not(:last-child) {
      @apply mr-8;
    }

    &::before {
      @apply w-full bg-primary h-0 bottom-1 absolute -z-10 left-0 transition-all duration-150;

      content: '';
    }
  }

  &__category:hover,
  &__category--active {
    &::before {
      @apply h-2 -z-10;
    }
  }

  &__categories {
    @apply hidden md:flex items-center justify-center mt-4 xl:mt-0 xl:ml-24;
  }

  &__container {
    @apply container mx-auto py-8 flex md:block xl:flex items-center xl:justify-start justify-center;
  }

  &__settings-icon {
    @apply w-8 h-8 flex-shrink-0 md:hidden;
  }

  &__input {
    @apply border border-gray-400 flex flex-1 items-center justify-start max-w-xl md:mx-auto mr-4 px-2 py-2 rounded-lg xl:mx-0;

    &-icon {
      @apply w-4 h-4 mr-2;
    }

    input {
      @apply bg-transparent w-full;
    }
  }

  &__mobile-settings {
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
