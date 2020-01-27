<template lang="html">

  <nav class="navbar navbar-expand-md navbar-light bg-light col-12">
      <img class="navbar-brand" id="navIcon" src="../assets/logoNav.png"/>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavId">
          <ul class="navbar-nav mt-lg-0">
              <li class="nav-item">
                  <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Noticias</a>
                  <div class="dropdown-menu" aria-labelledby="dropdownId">
                      <a class="dropdown-item" href="#">Noticia 1</a>
                      <a class="dropdown-item" href="#">Noticia 2</a>
                  </div>
              </li>
              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nosotros</a>
                  <div class="dropdown-menu" aria-labelledby="dropdownId">
                      <a class="dropdown-item" href="#">Nosotros 1</a>
                      <a class="dropdown-item" href="#">Nosotros 2</a>
                  </div>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#">Contacto</a>
              </li>
              <li class="nav-item active">
                  <a class="nav-link" href="#">TwoNotes</a>
              </li>
          </ul>
      </div>
      <div id="botones" class="nav-item">
          <button class="btn btn-outline-primary my-2 my-sm-0" onclick="abrirModalLogin()" type="submit">Login</button>
          <button class="btn btn-outline-primary my-2 my-sm-0" onclick="abrirModalRegis()" type="submit">Register</button>
      </div>
  </nav>

</template>

<script lang="js">

  export default  {
    name: 'nav1',
    props: [],
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
  .nav {

  }
  #navIcon{
    width: auto;
    height: 2.5em;
  }
</style>
