export const state = () => ({
})

export const mutations = {
}

export const actions = {
  async getAllDelegates ({ dispatch }, filter) {
    try {
      let response = await this.$axios.$get('http://128.199.72.101:3000/api/registrars', {
        params: {
          filter: {
            where: {
              and: [
                { acceptanceStatus: 2 },
                { roomFirst: filter.room }
              ]
            }
          }
        }
      })

      return response
    } catch (error) {
      dispatch('notify', { type: 'error', message: err.message }, { root: true })
    }

  }
}

export const getters = {
}
