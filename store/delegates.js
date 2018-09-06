export const state = () => ({
})

export const mutations = {
}

export const actions = {
  async getAllDelegates ({ dispatch }, filter) {
    let response = await this.$axios.$get('https://api.futureleadersummit.org/api/registrars', {
      params: {
        filter: {
          order: 'fullname ASC',
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
