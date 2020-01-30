<template lang="html">

  <div class="card col-12 col-sm-3 p-0 mt-3">
    <img class="card-img-top pt-3" :src="contenido.urlToImage" alt="">
    <div class="card-body">
      <h4 class="card-title">{{ contenido.title }}</h4>
      <p class="card-text">{{ contenido.content }}</p>
    </div>
    <div class="card-footer">
      <a name="readMore" id="leerMas" class="btn btn-primary" :href='contenido.url' role="button">Leer más</a>
    </div>
  </div>

</template>

<script lang="js">

  export default  {
    name: 'noticia',
    props: ['contenido',],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .noticia {

  }
</style>
