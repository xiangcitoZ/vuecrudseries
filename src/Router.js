import { createRouter, createWebHistory } from "vue-router";
import HomeSeries from './components/HomeSeries.vue';
import NuevoPersonaje from './components/NuevoPersonaje.vue';
import ModificarSeries from './components/ModificarSeries.vue';
import DetallesSeries from './components/DetallesSeries.vue';

const routes = [
    {
        path: "/", component: HomeSeries
    },
    {
        path: "/#", component: HomeSeries
    },
    {
        path: "/nuevopersonaje", component: NuevoPersonaje
    },
    {
        path: "/personajesseries", component: ModificarSeries
    }
    ,
    {
        path: "/serie/:idserie", component: DetallesSeries
    }
    
    
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});
export default router;