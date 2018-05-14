import * as types from './mutation-types'

const mutations = {
    [types.SET_TITLE] (state, title) {
        state.title = title
    },
    [types.SET_SHOW_BACK] (state, flag) {
        state.showBack = flag
    },
    [types.SET_SHOW_TITLE] (state, flag) {
        state.showTitle = flag
    },
    [types.SET_SHOW_MORE] (state, flag) {
        state.showMore = flag
    },
    [types.SET_USER_INFO] (state, user) {
        state.user = user
    },
    [types.SET_SHOW_BOTTOM] (state, flag) {
        state.showBottom = flag
    },

}

export default mutations