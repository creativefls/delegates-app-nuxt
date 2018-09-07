export const state = () => ({
})

export const mutations = {
}

export const actions = {
}

export const getters = {
  isHasRole: (state, getters, rootState) => (role) => {
    let userRole = rootState.auth.user.roles.map(item => {
      return item.split('_')[0].toLowerCase()
    })
    return userRole.indexOf(role) > -1
  },
}
