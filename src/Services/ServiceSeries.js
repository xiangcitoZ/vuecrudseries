import Global from './../Global';
import axios from 'axios';

export default class ServiceSeries{

    getSeries(){
        return new Promise(function(resolve){
            var request = "/api/Series";
            var url = Global.urlSeries + request;
            var series = [];
            axios.get(url).then(response =>{
                series = response.data;
                resolve(series);
            })
        })
        }

    getPersonajes(){
        return new Promise(function(resolve){
            var request = "/api/Personajes";
            var url = Global.urlSeries + request;
            var personaje = [];
            axios.get(url).then(response =>{
                personaje = response.data;
                resolve(personaje);
            })
        })
    }    

    //INSERT DE LA CRUD
    //METODO QUE RECIBA UN OBJETO DEPARTAMANTO 
    //DESDE LA PETICION
    insertarPersonaje(personaje){
        return new Promise(function(resolve){
            var request = "/api/Personajes";
            var url = Global.urlSeries + request;
            axios.post(url,personaje).then(response =>{
                resolve(response);

            });
        })
    }


    //MODIFICAR PERSONAJE
    updatePersonaje(idSerie,idPersonaje){
        return new Promise(function(resolve){
            var request = "/api/Personajes/" + idPersonaje + "/" + idSerie;
            var url = Global.urlSeries + request;
            console.log(url);
            //NECESITA UN OBJETO, POR ESO PONEMOS DESPUES DE url, el departamento
            axios.put(url).then(response =>{
                resolve(response);
            });
        })     
    }

    //CARGAR DATOS SERIE
    loadSerieID(idSerie){
        return new Promise(function(resolve){
            var request = "/api/Series/" + idSerie;
            var url = Global.urlSeries + request;
            var series = [];
            axios.get(url).then(response =>{
                series = response.data;
                resolve(series);
            })
        })
    }
}


