const apiUrl = 'https://backend.futureleadersummit.org'

export const state = () => ({
})

export const mutations = {
}

export const actions = {
  async getLiveScore({}, filter) {
    let response = await this.$axios.$get(apiUrl + '/api/livescore', filter)

    return response
  }
}

export const getters = {
}
