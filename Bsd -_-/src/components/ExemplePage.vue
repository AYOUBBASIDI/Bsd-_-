<template>
<p v-on:click="onClickButton">tets</p>
        <!-- <kinesis-element :strength="30">
            <img src="">
        </kinesis-element> -->

</template>

<script>
export default {
  name: 'ExemplePage',
  props: {
    
  },
  methods: {
    onClickButton () {
      this.$emit('clicked', 'someValue')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
    width:30%;
}
</style>