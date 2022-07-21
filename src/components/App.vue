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

          }
        },
      methods: {
        // Сохраняем текущую страницу параметров в сеансе

      },
      created() {

      }
    }
</script>

<style>
  .culc{
    font-family: Arial, "Helvetica CY", "Nimbus Sans L", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
</style>