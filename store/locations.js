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
  async fetch({ commit }, params) {
    params = { type: 'takeaway', query: '', ...params }
    const response = await this.$axios.$get('/api/locations', {
      params,
    })

    commit('SET_LIST', response.data)
  },
}
