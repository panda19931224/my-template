<template>
  <div class="dataPut">
    <span v-if="label">{{label}}</span>
    <input class="con" type="text" :value="value">
  </div>
</template>

<script>

export default {
  name: 'ayInput',
  props: {
    label: {
      type: String,
      default: () => ''
    }
  },
  data () {
    return {
      value: '',
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
<style lang="scss" scoped>
.dataPut{
  span{
    font-size: 24px;
    margin-right: 20px;
  }
  .con{
    width: 138px;
    height: 64px;
    outline: none;
    text-align: center;
    border: 1px solid #0ff;
  }
  &:focus{
      border-color: #f0f;
    }
}
</style>
