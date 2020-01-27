<template>
  <div id="notas" class="row">
        <nav1></nav1>
        <div id="barraBusqueda" class="col-12 d-flex">
            <input type="text" class="w-100 m-4" required v-on:keypress="add" v-model="textoNota" placeholder="Texto Nota">
        </div>
        <div id="barraFiltro" class="col-12 d-flex">
            <input type="text" class="w-100 m-4" v-on:keypress="add" v-model="textoFiltro" placeholder="Texto Filtro">
        </div>
        <div class="col-12 d-flex justify-content-around">
            <p class="mb-0"><a v-on:click="compTodas" href="#">Completar todas </a>| Tienes un total de {{ totalNotas }} | Completadas: {{ notasCompletadas }} <a v-on:click="delCompletadas" href="#">Borrar Completadas</a></p>
            <select v-model="orden">
                <option value="1">Alfabetico</option>
                <option value="2">Completadas</option>
                <option value="3">Incompletas</option>
                <option value="4">Prioridad</option>
            </select>
        </div>
        <lista @prioridad-cambiada="forzarUpdate" @borrarNota="borrarNota" :ordenarNotas="ordenarNotas"></lista>
    </div>
</template>

<script>

import lista from './components/lista.vue'
import nav1 from './components/nav1.vue'
export default {
  name: 'notas',
  components: {
    nav1,
    lista
  },
  data(){
    return{
        notas: [
        ],
        prio:'-1',
        textoNota:'',
        textoFiltro:'',
        orden:"4",
        completadas:false,
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
        add: function(event){
            if(event.keyCode == 13){
                this.notas.push({text:this.textoNota,marcada:false,tiempo:Date.now(),prioridad:-1});
                this.completadas=false;
                this.textoNota=''
            }
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
        },
        compTodas: function(){
            if(!this.completadas){
                this.ordenarNotas.forEach((nota)=>{
                    nota.marcada=true;
                });
                this.completadas=true;
            } else {
                this.ordenarNotas.forEach((nota)=>{
                    nota.marcada=false;
                });
                this.completadas=false;
            }
        },
        borrarNota: function(todo){
                this.notas.splice(this.notas.indexOf(todo),1);
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
            if(this.orden=="2")
                return this.notas.slice().filter((nota1)=>{
                    return nota1.text.toLowerCase().includes(this.textoFiltro.toLowerCase())
                }).sort((nota1,nota2)=>{
                    var a=nota1.marcada
                    var b=nota2.marcada
                    return a == false ? 1 : a==b ? 0 : -1
                });
            else if(this.orden=="3")
                return this.notas.slice().filter((nota1)=>{
                    return nota1.text.toLowerCase().includes(this.textoFiltro.toLowerCase())
                }).sort((nota1,nota2)=>{
                    var a=nota1.marcada
                    var b=nota2.marcada
                    return a == true ? 1 : a==b ? 0 : -1
                });
            else if(this.orden=="4")
                return this.notas.slice().filter((nota1)=>{
                    return nota1.text.toLowerCase().includes(this.textoFiltro.toLowerCase())
                }).sort((nota1,nota2)=>{
                    var a=nota1.prioridad
                    var b=nota2.prioridad
                    return a < b ? 1 : a == b ? 0 : -1
                });
            return this.notas.slice().filter((nota1)=>{
                    return nota1.text.toLowerCase().includes(this.textoFiltro.toLowerCase())
                }).sort((nota1,nota2)=>{
                var a=nota1.text.toLowerCase()
                var b=nota2.text.toLowerCase()
                return a > b ? 1 : a==b ? 0 : -1
            });
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins|Zhi+Mang+Xing&display=swap');
ol{
    font-family: 'Zhi Mang Xing', cursive;
}
html{
    
}
*{
    font-family: 'Poppins', sans-serif;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ol{
    list-style-type: none;
    padding:0
}
.fade-out-in-enter-active,
.fade-out-in-leave-active {
  transition: opacity .3s;
}

.fade-out-in-enter-active {
  transition-delay: .3s;
}

.fade-out-in-enter,
.fade-out-in-leave-to {
  opacity: 0;
}

</style>
