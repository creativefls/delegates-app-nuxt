const apiUrl = 'http://localhost:4000'

export const state = () => ({
})

export const mutations = {
}

export const actions = {
  async getMyClassroom({ }, filter) {
    let response = await this.$axios.$get(apiUrl + '/api/classroom')

    return response
  },
}

export const getters = {
}
