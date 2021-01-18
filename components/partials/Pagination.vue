<template>
  <div v-if="totalPages > 1" class="pagination">
    <button
      :disabled="currentPage - 1 < 1"
      class="pagination__control"
      @click="changePage(currentPage - 1)"
    >
      Anterior
    </button>
    <div
      class="order-first flex items-center justify-center mb-2 w-full sm:mb-0 sm:order-none sm:w-auto"
    >
      <button
        v-for="i in controls"
        :key="i"
        :class="{ 'pagination__page--active': i === currentPage }"
        class="pagination__page"
        @click="changePage(i)"
      >
        <span>
          {{ i }}
        </span>
      </button>
    </div>
    <button
      :disabled="currentPage + 1 > totalPages"
      class="pagination__control"
      @click="changePage(currentPage + 1)"
    >
      Siguiente
    </button>
  </div>
</template>
<script>
export default {
  props: {
    currentPage: {
      default: 0,
      required: true,
      type: Number,
    },
    show: {
      default: 5,
      required: false,
      type: Number,
    },
    totalPages: {
      default: 0,
      required: true,
      type: Number,
    },
  },
  computed: {
    controls() {
      const middle = Math.ceil(this.show / 2)
      let start = 1
      if (this.currentPage >= 1 && this.currentPage <= middle) {
        start = 1
      }
      if (
        this.currentPage > middle &&
        this.currentPage <= this.totalPages - middle
      ) {
        start = this.currentPage - middle + 1
      }
      if (this.currentPage > this.totalPages - middle) {
        start = this.totalPages - this.show + 1
      }
      let end = this.show + start - 1
      if (this.totalPages <= this.show) {
        start = 1
        end = this.totalPages
      }
      const aux = []
      for (let i = start; i <= end; i++) {
        aux.push(i)
      }
      return aux
    },
  },
  methods: {
    changePage(page) {
      this.$emit('change', page)
    },
  },
}
</script>
<style lang="postcss" scoped>
.pagination {
  @apply flex flex-wrap items-center justify-center;
  &__control {
    @apply rounded-lg p-2 text-black;

    &:hover {
      @apply bg-primary-hover text-black;
    }
  }
  &__page {
    @apply border-2 border-gray-400 cursor-pointer flex font-bold h-10 items-center justify-center p-1 rounded-lg text-black w-10 border border-gray-200;

    &--active {
      @apply bg-black text-white border-transparent;
    }

    &:hover&--active:hover {
      @apply bg-primary text-black;
    }

    &:first-child {
      @apply ml-2;
    }

    &:last-child {
      @apply mr-2;
    }

    &:not(:first-child) {
      @apply ml-1;
    }
    &:not(:last-child) {
      @apply mr-1;
    }
    &:hover {
      @apply bg-primary text-black;
    }
  }
}
</style>
