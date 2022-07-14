<template>
    <div class="projects">
        <img
            src="@/assets/projects/projects_background.jpg"
            alt="background"
            class="projects__backround"
        >
        <div class="swiper__wrapper">
            <swiper
                :slides-per-view="1"
                :space-between="0"
                :modules="modules"
                :speed="700"
                :loop="true"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                navigation
                keyboard
            >
                <swiper-slide
                    v-for="project in $store.state.projects.works"
                    :key="project.id"
                >
                    <img
                        :src="require(`@/assets/projects/${project.img}.png`)"
                        alt="project"
                        class="swiper__img"
                    >
                    <div class="project__discription__wrapper">
                        <div class="project__discription">
                            <div class="discription">
                                <h2 class="project__title">Name: <span class="title__name">{{ project.title }}</span></h2>
                                <p class="project__technology">Instruments: <span class="technology__stack">{{ project.body }}</span></p>
                            </div>
                            <div class="project__links">
                                <a
                                    :href="`${project.link}`"
                                    target="_blank"
                                    class="project__link"
                                >Let's See Project</a>
                                <a
                                    :href="`${project.github}`"
                                    target="_blank"
                                    class="project__link"
                                >Let's See GitHub</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Keyboard } from "swiper"

import 'swiper/scss/navigation';
import 'swiper/scss';

export default {
    components: { Swiper, SwiperSlide },

    setup() {
        const onSwiper = (swiper) => {
        };
        const onSlideChange = () => {
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Keyboard],
        };
    },
}

</script>
<style lang="scss">
.projects {
    position: relative;
}

.projects__backround {
    width: 100%;
    height: auto;
}

.swiper__wrapper {
    position: absolute;
    width: 84%;
    left: 8%;
    bottom: 28%;
}

.swiper__img {
    width: 100%;
    height: auto;
    cursor: pointer;
}

.project__discription__wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transform: translate(0px, 10px);
    transition: all 0.5s ease 0s;

    &:hover {
        opacity: 1;
        transform: translate(0px, 0px);
        background-color: rgba(0, 0, 0, 0.212);
    }
}

.project__discription {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    left: 0;
    padding-bottom: 20px;
    padding-top: 15px;
    margin-bottom: 0px;
    padding-left: 0px;
    background-color: rgba(0, 0, 0, 0.852);
    width: 100%;
}

.project__title {
    color: white;
    font-size: 40px;
    margin-left: 20px;
}

.title__name {
    color: white;
}

.project__technology {
    font-size: 27px;
    color: white;
    margin-top: 20px;
    margin-left: 20px;
}

.technology__stack {
    font-size: 25px;
    color: white;
}

.project__links {
    margin-right: 60px;
    display: flex;
    flex-direction: column;
}

.project__link {
    font-size: 20px;
    color: white;
    transition: all 0.5s ease 0s;
    padding: 10px;
    border: 1px solid white;
    background-color: #30916700;
    border-radius: 14px;

    &:last-child {
        margin-top: 20px;
    }

    &:hover {
        transform: scale(1.1);
        background-color: white;
        color: black;
    }

    &:active {
        transform: scale(0.9);
        background-color: white;
        color: black;
    }
}

// Swiper Styles
.swiper-button-next:after {
    color: white;
    text-shadow: 0px 0px 3px black;
}

.swiper-button-prev:after {
    color: white;
    text-shadow: 0px 0px 3px black;
}

// Adaptive 
@media(min-width: 1800px) {
    .project__title {
        font-size: 70px;
    }

    .project__technology {
        font-size: 60px;
    }

    .technology__stack {
        font-size: 50px;
    }

    .project__link {
        font-size: 25px;
        padding: 15px;

        &:last-child {
            margin-top: 30px;
        }
    }

    .swiper-button-next:after {
        font-size: 80px;
        margin-right: 2vw;
    }

    .swiper-button-prev:after {
        font-size: 80px;
        margin-left: 2vw;
    }
}

@media(max-width: 1024px) {
    .project__title {
        font-size: 28px;
    }

    .project__technology {
        font-size: 18px;
    }

    .technology__stack {
        font-size: 17px;
    }

    .project__link {
        font-size: 15px;
        padding: 10px;
    }

    .swiper-button-next:after {
        font-size: 30px;
    }

    .swiper-button-prev:after {
        font-size: 30px;
    }
}

@media(max-width: 768px) {
    .project__title {
        font-size: 22px;
        margin-left: 10px;
    }

    .project__discription {
        padding-bottom: 10px;
        padding-top: 10px;
    }

    .project__technology {
        font-size: 16px;
        margin-top: 10px;
        margin-left: 10px;
    }

    .technology__stack {
        font-size: 15px;
    }

    .project__links {
        margin-right: 30px;
    }

    .project__link {
        font-size: 12px;
        padding: 8px;

        &:last-child {
            margin-top: 10px;
        }
    }

    .swiper-button-next:after {
        font-size: 20px;
    }

    .swiper-button-prev:after {
        font-size: 20px;
    }

    .project__discription__wrapper {
        opacity: 1;
        transform: translate(0px, 0px);
        background-color: rgba(0, 0, 0, 0.212);
    }
}

@media(max-width: 600px) {
    .project__title {
        font-size: 19px;
        margin-left: 10px;
    }

    .project__discription {
        padding-bottom: 10px;
        padding-top: 10px;
    }

    .project__technology {
        font-size: 11px;
        margin-top: 10px;
        margin-left: 10px;
    }

    .technology__stack {
        font-size: 11px;
    }

    .project__links {
        margin-right: 10px;
    }

    .project__link {
        font-size: 8px;
        padding: 5px;

        &:last-child {
            margin-top: 10px;
        }
    }

    .swiper-button-next:after {
        font-size: 20px;
    }

    .swiper-button-prev:after {
        font-size: 20px;
    }

    .project__discription__wrapper {
        opacity: 1;
        transform: translate(0px, 0px);
        background-color: rgba(0, 0, 0, 0.212);
    }
}

@media(max-width: 425px) {
    .project__title {
        font-size: 14px;
        margin-left: 5px;
    }

    .project__discription {
        padding-bottom: 5px;
        padding-top: 5px;
    }

    .project__technology {
        font-size: 11px;
        margin-top: 5px;
        margin-left: 5px;
        width: 150px;
    }

    .technology__stack {
        font-size: 9px;
    }

    .project__links {
        margin-right: 10px;
    }

    .project__link {
        font-size: 9px;
        padding: 4px;
        text-align: center;

        &:last-child {
            margin-top: 5px;
        }
    }

    .swiper-button-next:after {
        font-size: 10px;
        margin-left: 7vw;
    }

    .swiper-button-prev:after {
        font-size: 10px;
        margin-right: 7vw;
    }

    .project__discription__wrapper {
        opacity: 1;
        transform: translate(0px, 0px);
        background-color: rgba(0, 0, 0, 0.212);
    }
}
</style>