import { createStore } from 'vuex'
import { AboutMe } from '@/store/AboutMe'
import { MyProjects } from '@/store/MyProjects'

export default createStore({
    modules: {
        about: AboutMe,
        projects: MyProjects,
    }
})