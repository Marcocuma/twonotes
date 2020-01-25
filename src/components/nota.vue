<template lang="html">

  <li class="m-4">
      <div class="card">
          <div class="card-body row d-flex align-items-center">
            <input type="checkbox" class="col-1" v-model='todo.marcada'>
            <p class="col-9" v-bind:class='{terminada : todo.marcada}'> {{ todo.text }} </p>
            <img src="../assets/trash.png" @click="eliminarNota(todo)"/>
          </div>
          <div class="card-footer">
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
          </div>
      </div>
    </li>

</template>

<script lang="js">

  export default  {
    name: 'nota',
    props: ['todo','key',],
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
        },
        eliminarNota: function(key){
          this.$emit('borrarNota',key);
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .nota {

  }
  .card-body img{
    height:3em;
    width:3em;
  }
  .card-body img:hover{
    background-color: rgba(128, 46, 46, 0.507);
    border-radius: 20%;
    transition:1s
  }
</style>
