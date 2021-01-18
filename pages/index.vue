<template>
  <main class="home">
    <HomeHero class="home__hero" />
    <HomeAbout class="home__about" data-aos="fade-up" />
    <HomeLocations class="home__locations" data-aos="fade-up" />
    <HomeTestimonials class="home__testimonials" data-aos="fade-up" />
    <HomeContact class="home__contact" data-aos="fade-up" />
    <HomeMobileApp class="home__app" data-aos="fade-up" />
  </main>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="postcss" scoped>
.home {
  &__about {
    @apply mt-12 mb-12;
  }

  &__locations {
    @apply mb-24;
  }

  &__testimonials {
    @apply z-10 md:-mb-24;
  }
}

@screen md {
  .home {
    &__about {
      @apply mt-32;
    }

    &__hero {
      @apply mb-48;
    }
  }
}
</style>
