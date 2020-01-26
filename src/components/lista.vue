<template lang="html">

    <ol class="col-12">
        <transition-group name="fade-out-in">
            <nota @prioridad-cambiada="forzarUpdate" @borrarNota="borrarNota" v-for="(todo,index) in ordenarNotas" :key='index' :index='index' :todo='todo'></nota>
        </transition-group>
    </ol>

</template>

<script lang="js">
import nota from './nota.vue'
  export default  {
    name: 'lista',
    components: {
      nota
    },
    props: ['ordenarNotas'],
    mounted () {
    },
    data () {
      return {

      }
    },
    methods: {
      forzarUpdate: function(){
        this.$emit('prioridad-cambiada');
      },
      borrarNota: function(key){
        this.$emit('borrarNota',key);
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .lista {

  }
</style>
