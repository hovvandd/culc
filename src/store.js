import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            count: 1
        }
    },
    getters: {
        COUNT: state => {
            return state.count;
        },
    }
})