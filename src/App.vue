<template>
  <div id="notas">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <input type="text" required v-model="nota">
                <input type="button" v-on:click="add" value="Boton">
                <input type="button" v-on:click="delCompletadas" value="Borrar Completadas">
                <select v-model="prio">
                    <option value="-1" >Baja</option>
                    <option value="0">Media</option>
                    <option value="1">Alta</option>
                </select>
            </div>
        </nav>
        <p>Tienes un total de {{ totalNotas }}</p>
        <p>Completadas: {{ notasCompletadas }}</p>
        <ol>
            <nota @prioridad-cambiada="forzarUpdate()" v-for="(todo,index) in ordenarNotas" :key='index' :todo='todo'></nota>
        </ol>
    </div>
</template>

<script>
import nota from './components/nota.vue'

export default {
  name: 'notas',
  components: {
    nota
  },
  data(){
    return{
        notas: [
        ],
        prio:'-1',
      }
  },
  mounted() {
      if (localStorage.notas) {
          this.notas = JSON.parse(localStorage.notas);
      }
    },
  updated() {
      localStorage.notas=JSON.stringify(this.notas);
  },
  methods:
    {
        add: function(){
            this.notas.push({text:this.nota,marcada:false,tiempo:Date.now(),prioridad:this.prio});
        },
        delCompletadas: function(){
            this.notas=this.notas.filter(function(elemento){
                return !elemento.marcada;
            })
        },
        calculaTiempo: function(index){
            var tiempo=new Date(Date.now()-this.notas[index].tiempo);
            return tiempo.getMinutes()
        },
        forzarUpdate: function(){
          this.$forceUpdate();
        }
    },
    computed:
    {
        totalNotas: function(){
            return this.notas.length
        },
        notasCompletadas: function(){
            var filtradas=this.notas.filter(function(elemento){
                return elemento.marcada==true;
            })
            return filtradas.length;
        },
        ordenarNotas: function(){
            return this.notas.slice().sort((nota1,nota2)=>{
                var a=nota1.text.toLowerCase()
                var b=nota2.text.toLowerCase()
                return a > b ? 1 : a==b ? 0 : -1
            });
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
