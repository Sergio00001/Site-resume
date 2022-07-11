<template>
    <div class="about_me">
        <img src="@/assets/aboutme_background.jpg" alt="background" class="background"
            :class="{ 'active': showBackground === true }">
        <div class="about_me__content" :class="{ 'active': showContent === true }">
            <div class="content__title">
                <h2 class="title">Digtyar Sergey</h2>
            </div>
            <div class="content__info">
                <div class="content__photo">
                    <img src="@/assets/avatar_template.jpg" alt="photo" class="photo">
                </div>
                <div class="content__details">
                    <p class="info__query">Position: <span class="text"><strong>Junior Front-end
                                developer</strong></span></p>
                    <p class="info__query">Age: <span class="text"><strong>26</strong></span></p>
                    <p class="info__query">City: <span class="text"><strong>Lviv (also interested in remote
                                work)</strong></span></p>
                    <p class="info__query">Phone: <span class="text"><strong><a href="tel:+380634706929"
                                    class="phone__link">+38(063)470-69-29</a></strong></span></p>
                    <div class="social__links">
                        <p class="info__query">Social Links:</p>
                        <a href="https://t.me/digtyar21" target="_blank" class="social__link"><img
                                src="@/assets/telegram_logo.png" alt="telegram" class="social__img"></a>
                        <a href="https://github.com/Sergio00001" target="_blank" class="social__link"><img
                                src="@/assets/github_logo.png" alt="github" class="social__img"></a>
                        <a href="https://instagram.com/digtyar1" target="_blank" class="social__link"><img
                                src="@/assets/instagram_logo.png" alt="instagram" class="social__img"></a>
                        <a href="mailto:digtyarsergio@gmail.com" class="social__link"><img src="@/assets/gmail_logo.png"
                                alt="gmail" class="social__img"></a>
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
                        <p class="text skill">Figma</p>
                        <p class="text skill">Photoshop</p>
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
                        <p class="text skill"></p>
                        <p class="text skill"></p>
                        <p class="text skill"></p>
                        <p class="text skill"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showContent: false,
            showBackground: false
        }
    },

    methods: {
        setShowContent() {
            this.showContent = true
        },

        setShowBackground() {
            this.showBackground = true
        }
    },

    mounted() {
        setTimeout(() => {
            this.setShowBackground()
        }, 100);

        setTimeout(() => {
            this.setShowContent()
        }, 300);
    }
}
</script>
<style scoped lang="scss">
// .about_me {
//     position: relative;
//     background-image: url('@/assets/aboutme_background.jpg');
//     background-size: cover;
//     background-position: center center;
//     background-repeat: no-repeat;
//     width: 100%;
//     height: 100vh;
//     opacity: 0;
//     visibility: hidden;
//     transition: all 0.5s ease 0s;

//     &.active {
//         opacity: 1;
//         visibility: visible;
//     }
// }

.background {
    width: 100%;
    height: 1500px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease 0s;

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
    top: -100%;
    transform: translate(-50%, 0px);
    transition: all 2s ease 0s;
    padding: 25px 50px;

    &.active {
        left: 50%;
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
    margin-bottom: 30px;
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
    width: 100%;
    height: 30px;
    transition: all 0.5s ease 0s;

    &:hover {
        height: 35px;
    }
}

.phone__link {
    font-size: 16px;
    color: black;
    border-bottom: 0px solid #000;
    transition: all 0.3s ease 0s;

    &:hover {
        color: teal;
        font-size: 18px;
        border-bottom: 1px solid teal;
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
</style>



<!-- сделать стол на который выезжает бумага с моими данными стол будет соответствовать высоте экрана 
а вторая часть приложения будет слайдером на каком-то фоне с моими проектами -->