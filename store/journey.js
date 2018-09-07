const apiUrl = 'http://localhost:4000'

export const state = () => ({
})

export const mutations = {
}

export const actions = {
  async createJourney({ }, data) {
    let response = await this.$axios.$post(apiUrl + '/api/journey', data)

    return response
  }
}

export const getters = {
}
