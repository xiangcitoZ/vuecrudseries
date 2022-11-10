<template>
 <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/#"><img style="width: 240px"
    src="./../assets/casa.jpg"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/nuevopersonaje">Nuevo personaje</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/personajesseries">Modificar personajes</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Series
          </a>
          <ul class="dropdown-menu" >

            <li v-for="ser in series" :value="ser.idSerie" :key="ser.idSerie">
                <router-link class="dropdown-item" :to="'/serie/' + ser.idSerie">
                {{ser.nombre}}
                </router-link>
            </li>
            
          </ul>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
  
</template>

<script>

import ServiceSeries from './../Services/ServiceSeries';
const service = new ServiceSeries();


export default {
  name: 'MenuSeries',
  mounted() {
        service.getSeries().then(result => {
            this.series = result;
            this.status = true;
        });
    },
    data() {
        return {
            series: [],
            status: false,

        }
    }
  
}
</script>