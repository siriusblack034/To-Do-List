import vuex from 'vuex'
import vue from 'vue'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
vue.use(vuex)
export const store = new vuex.Store({
    state: {
        loading : true,
        task: [],
        filter: 'all'
    },
    getters,
    mutations,
    actions
})