<template lang="html">

  <li>
        <input type="checkbox" id="checkbox" v-model='todo.marcada'>
        <label for="checkbox" v-bind:class='{terminada : todo.marcada}'> {{ todo.text }} </label>
        <div id="tiempo"><span>La nota fue añadida hace {{ calculaTiempo(todo.tiempo) }} minutos</span></div>
        <div class="btn-group btn-group-toggle" >
            <label class="btn btn-outline-success " v-bind:class="[ todo.prioridad == -1 ? 'active' : '']">
                <input type="radio" @click="cambiarPrioridad(todo,-1)" id="option1">Baja
            </label>
            <label class="btn btn-outline-primary" v-bind:class="[ todo.prioridad == 0 ? 'active' : '']">
                <input type="radio" @click="cambiarPrioridad(todo,0)" id="option2">Media
            </label>
            <label class="btn btn-outline-danger" v-bind:class="[ todo.prioridad == 1 ? 'active' : '']">
                <input type="radio" @click="cambiarPrioridad(todo,1)" id="option3">Alta
            </label>
        </div>
        {{ todo.prioridad }}
    </li>

</template>

<script lang="js">

  export default  {
    name: 'nota',
    props: ['todo'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
       calculaTiempo: function(ti){
            var tiempo=new Date(Date.now()-ti);
            return tiempo.getMinutes()
        },
        cambiarPrioridad: function(todo,number){
          todo.prioridad=number
          this.$emit('prioridad-cambiada');
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .nota {

  }
</style>
