<template>
  <section id="contact" class="contact">
    <MessageSent v-if="messageSent" />
    <div v-else class="contact__container">
      <div class="contact__info">
        <h2 class="contact__title" data-aos="fade-up">
          Cuentanos tu experiencia
        </h2>
        <p class="contact__text">
          Don't miss out on our great offers & Receive deals from all aour top
          restaurants via e-mail
        </p>
      </div>
      <form class="contact__form" @submit.prevent="sendMessage">
        <div class="contact__user-info">
          <label class="contact__input">
            Nombre y Apellido
            <input v-model="name" type="text" placeholder="John Doe" required />
          </label>
          <label class="contact__input">
            Correo electrónico
            <input
              v-model="email"
              type="email"
              placeholder="j.doe@correo.com"
              required
            />
          </label>
        </div>
        <div class="contact__user-message">
          <label class="contact__input">
            Mensaje
            <textarea
              v-model="message"
              required
              rows="5"
              type="text"
              placeholder="El día de ahora mi experiencia fue..."
            />
          </label>
        </div>
        <button class="contact__action button-action" type="submit">
          Enviar comentarios
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      name: null,
      message: null,
      messageSent: false,
    }
  },
  methods: {
    async sendMessage() {
      try {
        const response = await this.$store.dispatch('contact/sendData', {
          name: this.name,
          email: this.email,
          message: this.message,
        })

        if (response) {
          this.messageSent = true
        }
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.contact {
  @apply bg-black pt-28 pb-80 lg:pb-40;

  &__action {
    @apply mt-8;
  }

  &__container {
    @apply container mx-auto max-w-4xl;
  }

  &__form {
    @apply flex flex-wrap justify-center lg:justify-end items-start;
  }

  &__input {
    @apply text-white flex flex-col justify-center items-start w-full;

    input,
    textarea {
      @apply px-4 py-2 bg-transparent border border-white rounded w-full;
    }

    &:not(:last-child) {
      @apply mb-6;
    }
  }

  &__input:focus-within {
    @apply text-primary;

    input,
    textarea {
      @apply border-primary;
    }
  }

  &__info {
    @apply text-white text-center mb-16 md:w-11/12;
  }

  &__title {
    @apply font-title font-bold text-4xl;
  }

  &__text {
    @apply font-text1 text-lg md:text-2xl;
  }

  &__user-info {
    @apply w-full mb-6 lg:w-4/12;
  }

  &__user-message {
    @apply w-full lg:w-8/12 lg:pl-8;
  }
}
</style>
