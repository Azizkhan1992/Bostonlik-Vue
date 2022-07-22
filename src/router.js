import Vue from "vue";
import VueRouter from "vue-router";

import MainDashboardLayout from '@/components/admin/MainDashboardLayout.vue'


Vue.use(VueRouter);

const routes = [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: MainDashboardLayout,
                meta: { layout : 'MainDashboard'}
            },
            {
                path: '/my-profile',
                name: 'profile',
                component: ()=> import('./views/profile/MyProfile.vue'),
                meta: {layout: 'MainDashboard'}
            },
            {
                path: '/settings',
                name: 'settings',
                component: ()=> import('./views/settings-live/ProfileSettings.vue'),
                meta: { layout: 'MainDashboard'},
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
            },
            {
                path: '/sentenses',
                name: 'sentenses',
                component: ()=> import('./views/sentenses/Sentenses.vue')
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