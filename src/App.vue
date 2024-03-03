
<script> import HeaderProject from './components/headerproject.vue'; 
import Projects from "./components/projects.vue";
export default {
  components:{
    Projects,
    HeaderProject 
  }
}
</script>

<template lang="">
    <HeaderProject/>
    <main>
      <Projects/>
    </main>
</template>

<style lang="scss">
  
</style>
