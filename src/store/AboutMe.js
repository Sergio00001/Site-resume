export const AboutMe = {
    state: () => ({
        showContent: false,
        showBackground: false,
    }),
    getters: {},
    mutations: {
        setShowContent(state) {
            state.showContent = true
        },

        setShowBackground(state) {
            state.showBackground = true
        }
    },
    actions: {},
}