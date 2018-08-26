export const state = () => ({
  notification: {
    type: 'error',
    active: false,
    message: ''
  },
})

export const mutations = {
  SET_NOTIFICATION (state, payload) {
    state.notification.active = true
    state.notification.message = payload.message
    state.notification.type = payload.type
  },
  TOGGLE_NOTIFICATION (state) {
    state.notification.active = !state.notification.active
  }
}

export const actions = {
  notify(vuexCtx, payload) {
    vuexCtx.commit('SET_NOTIFICATION', payload)
  },
}

export const getters = {
}
