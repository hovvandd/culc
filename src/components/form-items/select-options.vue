<template>
  <select v-model="selectItem">
    <option v-for="(item,index) in options" :value="index">{{item}}</option>
  </select>
  <p>{{selectItem}}</p>
</template>

<script>
  export default {
    name: "selectOptions",
    data(){
      return {
        selectItem:this.$store.getters.SELECT,
        options: this.$store.getters.OPTIONS,
      }
    },
    methods: {
      // Сохраняем текущую страницу параметров в сеансе

    },
    watch:{
      selectItem(){
        console.log(this.options[this.selectItem]) // значение селекта для отправки формы
      }
    }
  }
</script>

<style lang="scss">

</style>