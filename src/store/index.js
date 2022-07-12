import { createStore } from 'vuex'
import { AboutMe } from '@/store/AboutMe'

export default createStore({
    modules: {
        about: AboutMe
    }
})