import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: {name: 'dashboard'},
        component: ()=> import('./components/admin/MainDashboardLayout.vue'),
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: ()=> import('./views/Dashboard.vue')
            },
            {
                path: '/my-profile',
                name: 'profile',
                component: ()=> import('./views/profile/MyProfile.vue')
            },
            {
                path: '/settings',
                name: 'settings',
                component: ()=> import('./views/settings-live/ProfileSettings.vue'),
                children: [
                    {
                        path: '/user-settings',
                        name: 'user-settings',
                        component: ()=> import('./views/settings-live/UserSettings.vue')
                    }
                ]
            },
            {
                path: '/requests',
                name: 'requests',
                component: ()=> import('./views/requests/RequestBlog.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: ()=> import('./views/reglog/Login.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;