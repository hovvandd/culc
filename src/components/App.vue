<template>
  <div class="culc">
    <select-options/>
  </div>
  <!--  npm run build | npm run watch. -->
</template>
<script>
  import selectOptions from "./form-items/select-options.vue";
    export default {
        name: 'App',
        components: {
          selectOptions
        },
        data(){
          return {
            count: this.$store.getters.COUNT,
          }
        },
      methods: {
        // Сохраняем текущую страницу параметров в сеансе

      },
      created() {
        console.log('asd')
        console.log(this.count)
      }
    }
</script>

<style lang="scss">

</style>