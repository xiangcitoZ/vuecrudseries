<template>
<div>
    <h1>Modificar Personajes</h1>

    <div style="width: 500px; margin: 0 auto">
        <form method="post" v-on:submit.prevent="updatePersonaje()">
            <label>Seleccione una serie: </label>
            <select class="form-control" v-model="idSerie">
                <option v-for="ser in series" :value="ser.idSerie" :key="ser.idSerie">{{ser.nombre}}</option>
            </select>
            <br />

            <label>Seleccione un Personaje: </label>
            <select class="form-control" v-model="idPersonaje">
                <option v-for="per in personajes" :value="per.idPersonaje" :key="per.idPersonaje">{{per.nombre}}</option>
            </select>
            <br />
            <button class="btn btn-info">Guardar cambios</button>

        </form>
    </div>
</div>
</template>

<script>
import ServiceSeries from './../Services/ServiceSeries';
const service = new ServiceSeries();
export default {

    name: "ModificarSeries",
    methods:{
        updatePersonaje(){
            console.log(this.idSerie,this.idPersonaje);
            service.updatePersonaje(this.idSerie, this.idPersonaje).then(result=>{
                    console.log(result);
                    this.$router.push("/");
                })
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

            personajes: [],
            statusPer: false,
            idPersonaje: 0

        }
    }

}
</script>
