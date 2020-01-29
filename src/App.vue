<template>
<div class="d-flex flex-column justify-content-between" id="contenedor">
    <div id="notas">
        <nav1></nav1>
        <router-view></router-view>
    </div>
    <footer1></footer1>
</div>
</template>

<script>


import nav1 from './components/nav1.vue'
import footer1 from './components/footer1.vue'
export default {
  name: 'notas',
  components: {
    nav1,
    footer1
  },
  data(){
    return{
        
      }
  },
  mounted() {
      
    },
  
  methods:
    {
        
    },
    computed:
    {
        
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins|Zhi+Mang+Xing&display=swap');
ol{
    font-family: 'Zhi Mang Xing', cursive;
}
body, #contenedor{
      min-height:100vh;
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


</style>
