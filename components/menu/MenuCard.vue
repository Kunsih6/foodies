<template>
  <article class="card">
    <figure class="card__image">
      <img :src="image" alt="img" />
    </figure>
    <div class="card__content">
      <h6 class="card__name">{{ name }}</h6>
      <p class="card__description">{{ description }}</p>
      <div class="card__footer">
        <span class="card__category">{{ category }}</span>
        <span class="card__price">${{ price }}</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    image: {
      default: null,
      required: true,
      type: String,
    },
    name: {
      default: null,
      required: true,
      type: String,
    },
    description: {
      default: null,
      required: true,
      type: String,
    },
    category: {
      default: null,
      required: true,
      type: String,
    },
    price: {
      default: null,
      required: true,
      type: String,
    },
  },
}
</script>

<style lang="postcss" scoped>
.card {
  @apply max-w-md;

  &__image {
    @apply relative w-full rounded-xl overflow-hidden transition-all duration-150;

    padding-top: 90%;

    img {
      @apply absolute w-full h-full object-cover top-0 left-0;
    }
  }

  &__name {
    @apply font-bold font-heading text-lg;
  }

  &__content {
    @apply p-4 pb-12 transition-all duration-150;
  }

  &__description {
    @apply font-text1 mt-4;
  }

  &__category {
    @apply text-sm text-gray-400;
  }

  &__price {
    @apply rounded bg-primary font-bold font-title px-2 py-1;
  }

  &__footer {
    @apply flex w-full justify-between items-center mt-6;
  }
}

.card:hover {
  .card__content {
    @apply bg-white rounded-b-xl shadow-xl;
  }

  .card__image {
    @apply rounded-b-none;

    padding-top: 100%;
  }
}
</style>
