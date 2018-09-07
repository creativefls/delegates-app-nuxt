const apiUrl = 'http://localhost:4000/'

export const state = () => ({
})

export const mutations = {
}

export const actions = {
  async createAnnouncement({}, formData) {
    let response = await this.$axios.$post(apiUrl + 'api/announcement', formData)

    return response
  }
}

export const getters = {
}
