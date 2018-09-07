const apiUrl = 'https://backend.futureleadersummit.org'

export const state = () => ({
})

export const mutations = {
}

export const actions = {
  async getMyClassroom({ }, filter) {
    let response = await this.$axios.$get(apiUrl + '/api/classroom')

    return response
  },
  async selectClassroom({ }, { className }) {
    let response = await this.$axios.$post(apiUrl + '/api/classroom', {
      className,
      scope: 'discovery panel'
    })

    return response
  }
}

export const getters = {
}
