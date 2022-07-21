import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            select:{
                activeItem:5 // активный элемент
            },
            options:{
                optionsItems: { // набор элементов в тег options
                    0: 'Тюмень',
                    3: 'Novgorod',
                    5: 'Moscow',
                    10: 'Leningrad'
                }
            }
        }
    },
    getters: {
        SELECT: state => {
            return state.select.activeItem;
        },
        OPTIONS: state => {
            return state.options.optionsItems;
        },
    }
})