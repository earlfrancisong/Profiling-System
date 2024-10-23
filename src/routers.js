import HomePage from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";
import ResetPassword from "./components/ResetPassword.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/home'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'SignIn',
        component: SignIn,
        path: '/'
    },
    {
        name: 'ResetPassword',
        component: ResetPassword,
        path: '/reset-password'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;