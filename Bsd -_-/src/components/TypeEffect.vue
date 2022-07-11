<template>
<div class="div">
    <h1>Hello I make</h1>
    <h1 class="typing">Hi</h1>
</div>
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
.div{
    display: flex;
    align-items: stretch;
    color:white;
}
.typing{
    margin-left:10px;
}
.typing::after{
    content: "";
    position:absolute;
    width:1px;
    height:6%;
    border-right:2px solid white;
    animation:blink 0.8s infinite ease;
}
@keyframes blink{
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
}

</style>