export const state = () => ({
  list: [],
})

export const getters = {
  getList(state) {
    return state.list
  },
}

export const mutations = {
  SET_LIST(state, list) {
    state.list = list
  },
}

export const actions = {
  async fetch({ commit }) {
    const response = await this.$axios.$get('/api/categories')
    commit('SET_LIST', response.data)
  },
}
