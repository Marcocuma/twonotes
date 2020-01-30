<template lang="html">

  <section class="noticias">
    <div class="col-12 row m-0">
      <noticia v-for="(contenido,index) in noticias" :key='index' :contenido='contenido'></noticia>
    </div>
  </section>

</template>

<script lang="js">
  import noticia from './noticia.vue'
  const axios = require('axios')
  export default  {
    name: 'noticias',
    props: [],
    components: {
      noticia,
    },
    mounted () {
      axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=e859accb681646698b5ba6f1e8b23ba8')
      .then(response =>{
        this.noticias = response.data.articles
      })
    },
    data () {
      return {
        noticias:[]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .noticias {

  }
</style>
