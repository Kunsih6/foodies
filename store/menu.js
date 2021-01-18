export const state = () => ({
  list: [],
  meta: {},
  currentPage: 1,
})

export const getters = {
  getList(state) {
    return state.list
  },
  getMeta(state) {
    return { ...state.meta }
  },
  getPage(state) {
    return state.currentPage
  },
}

export const mutations = {
  SET_LIST(state, list) {
    state.list = list
  },
  SET_META(state, meta) {
    state.meta = meta
  },
  SET_PAGE(state, page) {
    state.currentPage = page
  },
}

export const actions = {
  async fetch({ commit }, params) {
    const newParams = { page: params.page ?? 1 }

    if (params.category) newParams.category = params.category
    if (params.query && params.query.length > 0) newParams.query = params.query

    const response = await this.$axios.$get('/api/menu', {
      params: newParams,
    })

    commit('SET_LIST', response.data)
    commit('SET_META', response.meta)
  },
  changePage({ commit }, page) {
    commit('SET_PAGE', page)
  },
}
