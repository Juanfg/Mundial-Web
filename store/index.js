import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookie from 'js-cookie'

const createStore = () => {
    return new Vuex.Store({
        state: {
            token: localStorage.getItem('token') || null,
            userId: localStorage.getItem('userId') || null,
            isUserLoggedIn: localStorage.getItem('isUserLoggedIn') || null,
        },
        getters: {
            token(state) {
                return state.token
            },
            userId(state) {
                return state.userId
            },
            isUserLoggedIn(state) {
                return state.isUserLoggedIn
            },
        },
        mutations: {
            setToken (state, token) {
                state.token = token
                if (token) {
                    state.isUserLoggedIn = true
                }
                else  {
                    state.isUserLoggedIn = false
                }
                localStorage.setItem('token', state.token)
                localStorage.setItem('isUserLoggedIn', state.isUserLoggedIn)
            },
            setUserId (state, userId) {
                state.userId = userId
                localStorage.setItem('userId', state.userId)            
            }
        },
        actions: {
            setToken ({commit}, token) {
                commit('setToken', token)
            },
            setUserId ({commit}, userId) {
                commit('setUserId', userId)
            }
        },
  })
}

export default createStore