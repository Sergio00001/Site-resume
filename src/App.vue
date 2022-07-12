<template>
  <AboutMe />
</template>

<script>
import AboutMe from '@/components/AboutMe'
import AOS from 'aos';

import 'aos/dist/aos.css';

export default {
  components: { AboutMe },

  mounted() {
    AOS.init({
      anchorPlacement: 'bottom-bottom'
    })
  }
}
</script>

<style lang="scss">
</style>
