<template>
  <ul class="tabs">
    <li :class="{ 'tabs__tab--active': value === 0 }" @click="selectTab(0)">
      <FoodIcon class="tabs__tab-icon" />
      Para llevar
    </li>
    <li :class="{ 'tabs__tab--active': value === 1 }" @click="selectTab(1)">
      <TruckIcon class="tabs__tab-icon" />
      Domicilio
    </li>
  </ul>
</template>

<script>
import FoodIcon from '~/assets/svg/food-icon.svg?inline'
import TruckIcon from '~/assets/svg/truck-icon.svg?inline'

export default {
  components: {
    FoodIcon,
    TruckIcon,
  },
  props: {
    value: {
      default: 0,
      required: true,
      type: Number,
    },
  },
  methods: {
    selectTab(t) {
      this.$emit('input', t)
    },
  },
}
</script>

<style lang="postcss" scoped>
.tabs {
  @apply flex items-center w-full;

  &__tab--active {
    @apply bg-black text-white border-transparent;
  }

  &__tab-icon {
    @apply fill-current mr-1 w-4;
  }

  li {
    @apply px-8 py-4 transition-all duration-150 w-6/12 flex border-2 border-gray-100;
  }
}
</style>
