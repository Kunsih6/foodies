export const actions = {
  async sendData({ commit }, params) {
    const response = await this.$axios.post('/api/contact', params)

    return response
  },
}
