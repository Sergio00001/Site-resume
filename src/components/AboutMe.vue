<template>
    <div class="about_me">
        <img
            src="@/assets/aboutme_background.jpg"
            alt="background"
            class="background"
            :class="{ 'active': $store.state.about.showBackground === true }"
        >
        <div
            class="about_me__content"
            :class="{ 'active': $store.state.about.showContent === true }"
        >
            <div class="content__title">
                <h2 class="title">DIGTYAR SERGIY</h2>
            </div>
            <div class="content__info">
                <div class="content__photo">
                    <img
                        src="@/assets/avatar.jpg"
                        alt="photo"
                        class="photo"
                    >
                </div>
                <div class="content__details">
                    <p class="info__query">Position: <span class="text"><strong>Junior Front-end developer</strong></span></p>
                    <p class="info__query">Age: <span class="text"><strong>26</strong></span></p>
                    <p class="info__query">City: <span class="text"><strong>Lviv (also interested in remote work)</strong></span></p>
                    <p class="info__query">Phone: <span class="text"><strong><a
                                    href="tel:+380634706929"
                                    class="phone__link"
                                >+38(063)470-69-29</a></strong></span></p>
                    <div class="social__links">
                        <p class="info__query">Social Links:</p>
                        <a
                            href="https://t.me/digtyar21"
                            target="_blank"
                            class="social__link"
                        ><img
                                src="@/assets/telegram_logo.png"
                                alt="telegram"
                                class="social__img"
                            ></a>
                        <a
                            href="https://github.com/Sergio00001"
                            target="_blank"
                            class="social__link"
                        ><img
                                src="@/assets/github_logo.png"
                                alt="github"
                                class="social__img"
                            ></a>
                        <a
                            href="https://instagram.com/digtyar1"
                            target="_blank"
                            class="social__link"
                        ><img
                                src="@/assets/instagram_logo.png"
                                alt="instagram"
                                class="social__img"
                            ></a>
                        <a
                            href="mailto:digtyarsergio@gmail.com"
                            class="social__link"
                        ><img
                                src="@/assets/gmail_logo.png"
                                alt="gmail"
                                class="social__img"
                            ></a>
                    </div>
                </div>
            </div>
            <div class="content__technical_skills">
                <h3 class="title">Technical Skills</h3>
                <div class="technical_skills">
                    <div class="technology">
                        <p class="text">HTML5:</p>
                    </div>
                    <div class="skills">
                        <p class="text skill">BEM (Block Element Modificator)</p>
                        <p class="text skill">Semantic Layout</p>
                    </div>
                </div>
                <hr class="cross_line">
                <div class="technical_skills">
                    <div class="technology">
                        <p class="text ">CSS:</p>
                    </div>
                    <div class="skills">
                        <p class="text skill">Scss</p>
                        <p class="text skill">Bootstrap</p>
                        <p class="text skill">Materialize</p>
                        <p class="text skill">Responsive Layout</p>
                        <p class="text skill">Adaptive Layout</p>
                        <p class="text skill">Flexbox</p>
                        <p class="text skill">Grid</p>
                        <p class="text skill">Mobile First</p>
                        <p class="text skill">Desktop First</p>
                    </div>
                </div>
                <hr class="cross_line">
                <div class="technical_skills">
                    <div class="technology">
                        <p class="text">JavaScript:</p>
                    </div>
                    <div class="skills">
                        <p class="text skill">ES6+</p>
                        <p class="text skill">DOM</p>
                        <p class="text skill">REST API</p>
                        <p class="text skill">Websocket</p>
                        <p class="text skill">NPM</p>
                        <p class="text skill">Vue.js</p>
                        <p class="text skill">Vue CLI</p>
                        <p class="text skill">Vuex</p>
                        <p class="text skill">Vue Router</p>
                    </div>
                </div>
                <hr class="cross_line">
                <div class="technical_skills">
                    <div class="technology">
                        <p class="text">Other:</p>
                    </div>
                    <div class="skills">
                        <p class="text skill">Figma</p>
                        <p class="text skill">Photoshop</p>
                        <p class="text skill">Git</p>
                        <p class="text skill">GitHub</p>
                        <p class="text skill">Heroku</p>
                    </div>
                </div>
            </div>
            <div class="content__education_and_experience">
                <div class="education_and_experience">
                    <h3 class="title education_and_experience__title">Education:</h3>
                    <div class="education_and_experience__text">
                        <p class="text">Odessa National Mechnikov University (2013 - 2017)</p>
                        <p class="text">Specialty: Journalism</p>
                    </div>
                </div>
                <div class="education_and_experience">
                    <h3 class="title education_and_experience__title">Work Experience:</h3>
                    <div class="education_and_experience__text">
                        <p class="text">Quest Room (2014 - 2016)</p>
                        <p class="text">Position: Owner</p>
                    </div>
                    <div class="education_and_experience__text">
                        <p class="text">Professional DJ & Sound Producer (2016-2019)</p>
                    </div>
                    <div class="education_and_experience__text">
                        <p class="text">Music studio (2017-2018)</p>
                        <p class="text">Position: DJ teacher</p>
                    </div>
                    <div class="education_and_experience__text">
                        <p class="text">Fumigation Company (2018-2022)</p>
                    </div>
                </div>
            </div>
            <div class="content__soft_skills">
                <h3 class="title soft_skills">Soft Skills:</h3>
                <div class="skills">
                    <p class="text skill">Self-management</p>
                    <p class="text skill">Time management</p>
                    <p class="text skill">Creativity</p>
                    <p class="text skill">Attention to detail</p>
                    <p class="text skill">Optimism</p>
                    <p class="text skill">Self-motivation</p>
                    <p class="text skill">Self-control</p>
                </div>
            </div>
            <div class="go_projects_btn">
                <button
                    class="btn"
                    @click="scrolling"
                ></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        setTimeout(() => {
            this.$store.commit('setShowBackground')
        }, 100);

        setTimeout(() => {
            this.$store.commit('setShowContent')
        }, 0);
    },

    methods: {
        scrolling() {
            document.documentElement.scrollTo({
                top: 1750,
                behavior: 'smooth'
            })
        }
    }
}
</script>
<style scoped lang="scss">
.projects {
    text-align: left;
    margin-top: 40px;
    margin-bottom: 5px;
}

.projects__text {
    margin-bottom: 20px;
    color: rgb(182, 182, 182);
}


.about_me {
    position: relative;
}

.background {
    width: 100%;
    height: 105rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease 0s;

    &.active {
        opacity: 1;
        visibility: visible;
    }
}

.about_me__content {
    position: absolute;
    width: 90%;
    background-color: white;
    left: 50%;
    top: 0;
    transform: translate(-50%, -100%);
    transition: all 1.5s ease-in-out 0.5s;
    padding: 50px 50px;
    visibility: hidden;

    &.active {
        visibility: visible;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}

.content__title {
    text-align: center;
}

.content__info {
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 50px;
}

.content__photo {
    width: 25%;
}

.photo {
    width: 100%;
    height: auto;
    border: 2px solid black;
}

.content__details {
    padding: 15px 30px;
}

.info__query {
    padding-bottom: 10px;
    font-size: 16px;
    color: rgb(87, 87, 87);

}

.social__links {
    display: flex;
    align-items: center;
}

.social__link {
    margin-left: 10px;
}

.social__img {
    width: 30px;
    height: 30px;
    transition: all 0.5s ease 0s;

    &:hover {
        transform: scale(1.5);
    }
}

.phone__link {
    font-size: 16px;
    color: black;
    border-bottom: 0px solid #000;
    transition: all 0.3s ease 0s;

    &:hover {
        color: #41b884;
        font-size: 18px;
        border-bottom: 1px solid #41b884;
    }
}

.technical_skills {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.technology {
    margin-right: 10px;
}

.skills {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.skill {
    padding: 10px;
    margin: 4px;
    border: 1px solid black;
    border-radius: 14px;
    color: white;
    background-color: black;
}

.content__education_and_experience {
    margin-top: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.education_and_experience {
    padding: 10px;
    border: 1px solid black;

    &:last-child {
        border-left: 0px;
    }
}

.education_and_experience__title {
    text-align: left;
}

.education_and_experience__text {
    margin-top: 20px;
}


.soft_skills {
    margin-bottom: 20px;
    margin-top: 60px;
    text-align: left;
}


// Adaptive 
@media(min-width: 1800px) {

    .about_me__content {
        padding: 50px 100px;
    }

    .background {
        height: 160rem;
    }

    .title {
        font-size: 50px;
    }

    .text {
        font-size: 30px;
    }

    .info__query {
        font-size: 27px;
        padding-bottom: 30px;
    }

    .social__img {
        height: 50px;
        width: 50px;
    }

    .phone__link {
        font-size: 30px;
    }

    .technical_skills {
        margin-top: 30px;
    }

    .content__education_and_experience {
        margin-top: 100px;
    }

    .soft_skills {
        margin-top: 100px;
    }

    .go_projects_btn {
        margin-top: 80px;
        margin-bottom: 30px;
    }

    .btn {

        &::before {
            padding: 20px 0px 20px 20px;
        }

        &::after {
            padding: 20px 20px 20px 0px;
        }
    }
}

@media(max-width: 800px) {

    .background {
        height: 90rem;
    }

    .title {
        font-size: 20px;
    }

    .text {
        font-size: 14px;
    }

    .info__query {
        font-size: 12px;
    }

    .social__img {
        width: 20px;
        height: 20px;
    }

    .phone__link {
        font-size: 14px;
    }

    .skill {
        padding: 7px;
    }

    .content__soft_skills {
        margin-bottom: 20px;
    }

    .go_projects_btn {
        display: none;
    }
}

@media(max-width: 730px) {

    .background {
        height: 135rem;
    }

    .content__info {
        flex-direction: column;
    }

    .content__photo {
        width: 30%;
    }

    .skill {
        margin: 0;
    }

    .skills {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 5px;
        text-align: center;
    }

    .technical_skills {
        flex-direction: column;
    }

    .technology {
        margin-right: 0;
        margin-bottom: 15px;
    }

    .about_me__content {
        padding: 15px 25px;
    }

}

@media(max-width: 450px) {

    .content__photo {
        width: 50%;
    }

    .background {
        height: 120rem;
    }

    .title {
        font-size: 18px;
    }

    .text {
        font-size: 12px;
    }

    .info__query {
        font-size: 11px;
    }

    .social__img {
        width: 15px;
        height: 15px;
    }

    .social__link {
        margin-left: 5px;
    }

    .phone__link {
        font-size: 12px;
    }

    .skills {
        grid-template-columns: 1fr 1fr;
    }

    .skill {
        padding: 5px;
    }

    .btn {

        &::before {
            padding: 5px 0px 5px 5px;
        }

        &::after {
            padding: 5px 5px 5px 0px;
        }
    }

    .content__education_and_experience {
        margin-top: 50px;
    }

    .soft_skills {
        margin-top: 40px;
    }

    .go_projects_btn {
        margin: 50px auto;
    }

    .about_me__content {
        width: 85%;
        padding: 15px 10px;
    }
}
</style>



<!-- сделать стол на который выезжает бумага с моими данными стол будет соответствовать высоте экрана 
а вторая часть приложения будет слайдером на каком-то фоне с моими проектами -->