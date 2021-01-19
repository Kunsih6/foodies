<template>
  <section id="locations" class="locations">
    <div class="locations__container">
      <div class="locations__content">
        <h2 class="locations__title" data-aos="fade-up">Estamos para ti</h2>
        <PartialTabs v-model="currentTab" />
        <div class="locations__search">
          <SearchIcon />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar nombre o dirección"
          />
        </div>
        <div v-if="locations.length > 0" class="locations__list">
          <LocationCard
            v-for="(location, i) in locations"
            :key="i"
            :active="i === currentLocation"
            :name="location.name"
            :address="location.address"
            :open-at="location.opening_time"
            :close-at="location.closing_time"
            class="locations__item"
            @click.native="currentLocation = i"
          />
        </div>
        <LocationNotFound v-else />
      </div>
      <GMap
        v-if="locations.length > 0"
        ref="gMap"
        language="es"
        :center="mapCenter"
        :options="mapOptions"
        :zoom="mapZoom"
        class="locations__map"
      >
        <GMapMarker :position="mapCenter" @click="currentLocation = location" />
      </GMap>
      <!-- <div v-if="locations.length > 0" class="locations__map">
      </div> -->
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import debounce from 'lodash/debounce'
import SearchIcon from '~/assets/svg/search.svg?inline'

export default {
  components: {
    SearchIcon,
  },
  data() {
    return {
      currentLocation: 0,
      currentTab: 0,
      searchQuery: '',
      mapOptions: {
        mapTypeControl: false,
        streetViewControl: false,
      },
      mapZoom: 16,
    }
  },
  async fetch() {
    await this.$store.dispatch('locations/fetch', {
      type: this.currentTab === 0 ? 'takeaway' : 'delivery',
      query: this.searchQuery,
    })
    this.currentLocation = 0
  },
  computed: {
    ...mapGetters({
      locations: 'locations/getList',
    }),
    mapCenter() {
      return {
        lat: Number(this.locations[this.currentLocation].latitude),
        lng: Number(this.locations[this.currentLocation].longitude),
      }
    },
  },
  watch: {
    currentTab(val) {
      this.search()
    },
    searchQuery(val) {
      this.search()
    },
    currentLocation() {
      if (this.locations !== [] && this.locations !== undefined) {
        this.$nextTick(() => {
          this.$refs.gMap.initMap()
        })
      }
    },
  },
  methods: {
    search: debounce(
      function () {
        this.$fetch()
      },
      500,
      { maxWait: 1500 }
    ),
  },
}
</script>

<style lang="postcss" scoped>
.locations {
  &__container {
    @apply container mx-auto;
  }

  &__item:not(:last-child) {
    @apply mb-2;
  }

  &__map {
    @apply hidden;
  }

  &__search {
    @apply flex items-center py-4 border-b-2 border-gray-100 px-6 mb-4;

    input {
      @apply ml-2 flex-1;
    }
  }

  &__title {
    @apply font-bold font-title mb-6 text-4xl;
  }
}

@screen md {
  .locations {
    &__map {
      @apply block mt-8 h-96 lg:h-full;

      >>> * {
        @apply h-full;
      }
    }
  }
}

@screen lg {
  .locations {
    &__container {
      @apply flex;
    }

    &__content {
      @apply w-6/12 mr-12;
    }

    &__map {
      @apply flex-1 h-auto;
    }
  }
}
</style>
