<template>
    <div style="width: 500px; margin: 0 auto">
        <h1>
            Detalles personajes
        </h1>
        <div>
            <form method="post" v-on:submit.prevent="volver()" >
            <br/>
            <button class="btn btn-warning">Volver</button>
            <br/>
                <table class="table table-bordered table-warning" 
                style="width: 500px">
                    <thead>
                        <tr>
                            <th>Personaje</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="ser in tablaserie" :key="ser.idSerie">
                            <td>{{ser.nombre}}</td>
                            <td> <img style="width: 250px"
                            :src= "ser.imagen" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
</template>


<script>



import ServiceSeries from './../Services/ServiceSeries';
const service = new ServiceSeries();

    export default {
        name: "DetallesPersonajes",
        watch: {
            //EL CONTROL DE LA VARIABLE SE REALIZA 
            //MEDIANTE STRING Y NO SE UTILIZA LA PALABRA this
            '$route.params.idserie'(nextVal, oldVal){
                //SI HA CAMBIADO, REALIZAMOS ACCIONES
                if (nextVal != oldVal){
                    //ACCIONES
                    this.loadPersonajeSerie();
                }
            }
        },
    methods:{
            //METODO PARA VOLVER
           volver(){
                this.idpersonaje = this.$route.params.idpersonaje; 
                this.$router.push("/serie/"+ this.idpersonaje);
           },
            
            //METODO PARA DEMOSTRAR LA TABLA
            loadPersonajeSerie(){
                this.id = this.$route.params.idpersonaje;        
                service.loadPersonajeSerie(this.id).then(result =>{
                this.tablaserie = result;   
                 
            });
            }
        },
        data(){
            return{
                id:0
                , tablaserie:[]
            }
        }, 
        mounted(){
            
          this.loadPersonajeSerie();
        }
    }
</script>