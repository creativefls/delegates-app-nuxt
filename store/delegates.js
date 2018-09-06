export const state = () => ({
})

export const mutations = {
}

export const actions = {
  async getAllDelegates ({ dispatch }, filter) {
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
  }
}

export const getters = {
}
