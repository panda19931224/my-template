<template>
  <div>
    <nav-tit v-on="(currMethods && currMethods.listeners) || tempMethods.listeners">
      <template #p1="a">
        <p >{{a.name}}</p>
      </template>
      <template #p2="b">
        <p >{{b.name}}</p>
      </template>
    </nav-tit>
    <h1>pppppppp</h1>
    <ay-input :label="'sasda'"></ay-input>
    <ay-input-add :label="'sasda'"></ay-input-add>
  </div>
</template>
<script>

import instal from 'ssy-npm-component/src/index'
import { mixins } from "../mixinProject/select.js";
export default {
  name: 'HelloWorld',
  props: {
    isShow: {
      type: String,
      default: () => '21'
    }
  },
  mixins: [mixins],
  data () {
    return {
      currMethods: {
        listeners: {
          Alerts: () => {
            instal.myLibs.Alert.show('今天是个好日子2')
          }
        }
      }
    }
  },
  mounted() {
    // instal.myLibs.Alert.show('今天是个好日子')
  },
  methods: {
    sas () {
      this.clickMe()
      this.$emit('aaa', 1)
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
