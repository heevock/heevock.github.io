import Main from "../pages/Main.vue"
import Contacts from "../pages/Contacts.vue";
import Headphones from "../pages/Catalog/Headphones.vue";

const routes = [
    {
        path:'/',
        component: Main,
        meta: {
            auth: true,
            title: 'HeadHears'
        }
    },

    {
        path:'/contacts',
        component: Contacts,
        meta: {
            auth: true,
            title: 'Контакты'
        }
    },

    {
        path:'/headphones',
        component: Headphones,
        meta: {
            auth: true,
            title: 'Наушники'
        }
    },

];
export default routes;