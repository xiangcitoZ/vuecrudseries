<template>
<div>
    <h1 style="color:blue">
        Nuevo Personaje
    </h1>
   
    <div style="width: 500px; margin: 0 auto">
        <form method="post" v-on:submit.prevent = "insertarPersonaje()">
            <label>Nombre: </label>
            <input type="text" class="form-control" v-model="personaje.nombre" /><br />

            <label>Imagen: </label>
            <input type="text" class="form-control" v-model="personaje.imagen" /><br />

            <label>Serie: </label>
            <select class="form-control" v-model="personaje.idSerie"  >
                <option v-for="ser in series" :value="ser.idSerie" :key="ser.idSerie">{{ser.nombre}}</option>
            </select>
            <br />
            <button class="btn btn-info">Insertar personaje</button>

        </form>
    </div>

</div>
</template>

<script>
import ServiceSeries from './../Services/ServiceSeries';
const service = new ServiceSeries();

export default {

    name: "NuevoPersonaje",
    mounted() {
        service.getSeries().then(result => {
            this.series = result;
            this.status = true;
        });
    },
    methods: {
        insertarPersonaje() {
            console.log(this.personaje);
            service.insertarPersonaje(this.personaje).then(result => {
                console.log(result);
                this.$router.push("/");
            })
        }

    },
    data() {
        return {
            series: [],
            status: false,

        

            personaje: {
                idPersonaje: parseInt (Math.random()*100 + 1),
                nombre: "",
                imagen: "",
                idSerie: 0
            }
        }
    }
}
</script>
