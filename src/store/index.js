import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      credentials: {
        userEmail: sessionStorage.getItem('email') || 'please log in',
        token: sessionStorage.getItem('token') || '',
      },
      signInFlag: sessionStorage.getItem('signInFlag') || false,
      data: [],
      error: {}
    }
  },
  mutations: {
    setCredentials(state, payload) {
      state.credentials.email = payload.email
      state.credentials.token = payload.token
      state.signInFlag = payload.signInFlag
    },
    setError(state, payload) {
      state.error = payload
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getEmail: state => state.credentials.email,
    getToken: state => state.credentials.token,
    getSignInFlag: state => state.signInFlag,
    getError: state => state.error,
  }
})
