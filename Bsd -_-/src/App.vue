<template>
<body>
<div v-show="elementVisible" id="load">
    <LoadingPage/> 
    <ExemplePage @clicked="onClickChild"/>  
</div>
  <HomePage/>

<TypeEffect/>


  </body>
</template>

<script>
import HomePage from './components/HomePage.vue'
import LoadingPage from './components/LoadingPage.vue'
import ExemplePage from './components/ExemplePage.vue'
import TypeEffect from './components/TypeEffect.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    LoadingPage,
    ExemplePage,
    TypeEffect,
  },
  data() {
            return {
                elementVisible: true
            }
        },
  created() {
            setTimeout(() => this.elementVisible = false, 5000)
        },

          methods: {
    onClickChild (value) {
      console.log(value) // someValue
    }
  }
          
        
}
</script>

<style lang="scss">
body{
  background:#1d1d1f;
  font-family: 'Roboto', sans-serif;
  margin:0;
  letter-spacing: 1.5px;
}
#load{
  display:none;
    position: absolute;
    width: 98vw;
    height: 92vh;
    z-index: 11;
    }
</style>
