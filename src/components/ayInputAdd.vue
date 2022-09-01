<template>
  <div class="dataPut">
    <div class="left" v-if="label">{{label}}</div>
    <div class="right">
      <button @click="add">+</button>
      <input class="con" type="text" :value="value"/>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ayInputAdd',
  props: {
    label: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      value: 0,
    }
  },
  listeners: {},
  mounted() {
    // instal.myLibs.Alert.show('今天是个好日子')
  },
  methods: {
    add () {
      typeof(this.value) === 'number' && this.value ++
    },
    reduce () {
      typeof(this.value) === 'number' && this.value --
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dataPut{
  .left{
    float: left;
    line-height: 64px;
    font-size: 24px;
    margin-right: 20px;
  }
  .right{
    float: left;
    button{
      width: 30px;
      height: 30px;
      line-height: 30px;
      border-radius: 50%;
      background: #0ff;
      border: 0;
      outline: none;
      cursor: pointer;
    }
    .con{
      width: 138px;
      height: 64px;
      outline: none;
      text-align: center;
      border: 1px solid #0ff;
      margin: 0 20px;
    }
    &:focus{
      border-color: #f0f;
    }
  }
}
</style>
