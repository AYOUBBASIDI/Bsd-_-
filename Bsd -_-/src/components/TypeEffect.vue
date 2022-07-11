<template>
<h1>Typewriter</h1>

<button v-on:click="typeWriter">Click me</button>

<p id="demo"></p>

</template>

<script>
export default {
  name: 'LoadingPage',
  props: {
    
  },
  methods:{
    typeWriter() {
        var i = 0;
        var txt = 'Lorem ipsum dummy text blabla.';
        var speed = 50;
        if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(this.typeWriter(), speed);
        }
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>