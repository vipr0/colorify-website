 export const state = () => ({
    telegramUser: null
})

export const mutations = {
    setTelegramUser: (state, user) => {
        state.telegramUser = user;
    }
}

export const actions = {
    saveUser: ({ commit }, user = {}) => {
        commit('setTelegramUser', user);
    },
}