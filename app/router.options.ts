// @ts-nocheck
import type { RouterConfig } from '@nuxt/schema'

export default {
    routes: (_routes) => [
        {
            name: 'home',
            path: '/',
            component: () => import('@/pages/index.vue')
        },
        {
            name: 'docs',
            path: '/docs:docPath(.*)',
            component: () => import('@/pages/docs/docs.vue')
        }
    ],
} satisfies RouterConfig