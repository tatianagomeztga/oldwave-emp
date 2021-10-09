<template>
  <h1>hola</h1>
</template>

<script>
export default {
    created(){
      
      this.$root.$on('productByName', (name) => {
        
        this.setResults(name);
        
      })
    },
    methods:{
      setResults(results){
        this.info = results;
        console.log(this.info);
      },
    }
}
</script>

<style>

</style>