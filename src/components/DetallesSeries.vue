<template>
<div>
    <h1>
        Detalles series
    </h1>
    <div style="width:500px; margin: 0 auto" >
        <form method="post" v-on:submit.prevent="loadPersonajeSerie()" >

            <!-- LOS DOS PUNTOS SON IMPORTANTES EN :SRC , PORQUE ES DINAMICO -->
            <img style="width: 340px"
            :src= "serie.imagen" />
            <br/>
            
            <h1>{{serie.nombre}} </h1>       
            <br/>
            <p>IMDB: {{serie.puntuacion}}</p>
            <br/>
            <button class="btn btn-warning">Personajes</button>

        </form>
    </div>
</div>
</template>

<script>

import ServiceSeries from './../Services/ServiceSeries';
const service = new ServiceSeries();


export default {
    name: "DetallesSeries",
        watch: {
            //EL CONTROL DE LA VARIABLE SE REALIZA 
            //MEDIANTE STRING Y NO SE UTILIZA LA PALABRA this
            '$route.params.idserie'(nextVal, oldVal){
                //SI HA CAMBIADO, REALIZAMOS ACCIONES
                if (nextVal != oldVal){
                    //ACCIONES
                    this.loadSerie();
                }
            }
        },
    methods:{
            loadSerie(){
                this.id = this.$route.params.idserie;
                
                service.loadSerieID(this.id).then(result =>{
                this.serie = result;
                
            });
            },
            
            loadPersonajeSerie(){
                this.id = this.$route.params.idserie;
                
                service.loadPersonajeSerie(this.id).then(result =>{
                this.tablaserie = result;
                this.$router.push("/personajes/"+ this.id);
                
            });
            }
        },
        data(){
            return{
                serie:{}
                , id:0
                , tablaserie:[]
            }
        }, 
        mounted(){
            
          this.loadSerie();
        }
}
</script>
