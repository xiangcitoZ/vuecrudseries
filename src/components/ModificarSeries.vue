<template>
<div>
    <h1>Modificar Personajes</h1>

    <div style="width: 500px; margin: 0 auto">
        <form method="post">

            <label>Seleccione una serie: </label>
            <select class="form-control" v-model="idSerie" v-on:change="pintarImagenSerie">
                <option v-for="ser in series" :value="ser.idSerie" :key="ser.idSerie">
                    {{ser.nombre}}
                </option>
            </select>
            <br />

            <label>Seleccione un Personaje: </label>
            <select class="form-control" v-model="idPersonaje" v-on:change="pintarImagenPersonaje">
                <option v-for="per in personajes" :value="per.idPersonaje" :key="per.idPersonaje">
                    {{per.nombre}}
                </option>
            </select>

            <br />

            <button class="btn btn-info" v-on:click.prevent="updatePersonaje()">Guardar cambios</button>

        </form>
        <div >
            <!-- PARA PINTAR LAS IMAGENES -->
            <div v-if="imagenSerie.length > 0">
                <h1 style="color: blue"> {{nombreSerie}} </h1>
                <img :src="imagenSerie" />
            </div>

            <div v-if="imagenPersonaje.length > 0">
                <h1 style="color: blue"> {{nombrePersonaje}} </h1>
                <img :src="imagenPersonaje" />
            </div>

        </div>
    </div>
</div>
</template>

<script>
import ServiceSeries from './../Services/ServiceSeries';
const service = new ServiceSeries();
export default {

    name: "ModificarSeries",
   
    methods: {
        updatePersonaje() {
            console.log(this.idSerie, this.idPersonaje);
            service.updatePersonaje(this.idSerie, this.idPersonaje).then(result => {
                console.log(result);
                this.$router.push("/");
            })
        },

        //METODO PARA PINTAR IMAGEN DE SERIE
        pintarImagenSerie() {
            var result = this.series.filter(miembro => miembro.idSerie == this.idSerie);
            this.nombreSerie = result[0].nombre;
            this.imagenSerie = result[0].imagen;
            
        },

        //METODO PARA PINTAR IMAGEN DE PERSONAJES
        pintarImagenPersonaje() {
            var result = this.personajes.filter(miembro => miembro.idPersonaje == this.idPersonaje);
            this.nombrePersonaje = result[0].nombre;
            this.imagenPersonaje = result[0].imagen;
            
        }

    },
    mounted() {
        service.getSeries().then(result => {
            this.series = result;
            this.statusSer = true;
        });

        service.getPersonajes().then(result => {
            this.personajes = result;
            this.statusPer = true;
        });
    },
    data() {
        return {
            series: [],
            statusSer: false,
            idSerie: 0,

            //PARA PINTAR SERIE
            imagenSerie: "",
            nombreSerie: "",

            personajes: [],
            statusPer: false,
            idPersonaje: 0,

            //PARA PINTAR PERSONAJE
            imagenPersonaje: "",
            nombrePersonaje: ""

        }
    }

}
</script>
