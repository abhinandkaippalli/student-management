<template>
  <NavBar />
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue';

export default defineComponent({
  name: 'AppVue',
  components: {
    NavBar
  }

})
</script>

<style lang="scss">
@import './assets/styles/index.scss';

</style>
