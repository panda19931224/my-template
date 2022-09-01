<template>
  <div>
    <h1 @click="sas">{{mes}}</h1>
    <slot name="p2" v-bind="pp1">oooooo</slot>
    <slot name="p1" v-bind="pp2"></slot>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    mes: {
      type: String,
      default: () => '南京安源科技'
    }
  },
  data () {
    return {
      pp1: {
        name: 'uuuuuuuu'
      },
      pp2: {
        name: 'eeeeeee'
      },
    }
  },
  listeners: {},
  mounted() {
    // instal.myLibs.Alert.show('今天是个好日子')
  },
  methods: {
    sas () {
      this.$emit('Alerts', 1)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
