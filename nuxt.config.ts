// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig(<any>{
    ssr: false,
    // module:[
    //     ['nuxt-mail', {
    //         message: {
    //           to: 'adjeoumar@gmail.com',
    //         },
    //         smtp: {
    //           host: "smtp.example.com",
    //           port: 587,
    //         },
    //       }],
    // ],
    runtimeConfig: {
        apiSecret: '123',
        strapi: {
            url: 'https://api.coumbassa-sanden.com' // can be overridden by NUXT_PUBLIC_STRAPI_URL environment variable
        },
        public: {
            api: 'https://api.coumbassa-sanden.com/api',
            apiRoot: 'https://api.coumbassa-sanden.com',
            url: 'https://coumbassa-sanden.com',
        }
    },
    plugins: [
    ],
    // publicRuntimeConfig: {
    //     api: 'https://api.coumbassa-sanden.com',
    //     url: 'https://coumbassa-sanden.com',
    // },
    css: [
        // "assets/css/plugins/swiper.min.css",
        // "assets/css/plugins/fancybox.min.css",
        "assets/css/bootstrap.css",
        "assets/css/owl.css",
        "assets/css/style.css",
        "assets/css/responsive.css",
        "bootstrap/dist/css/bootstrap.min.css",
        //Quasar
        // 'quasar/fonts',
        // 'quasar/animations',
        'quasar/icons',
        // 'quasar/css',
        // 'quasar/brand'
    ], // add
    head: {
        title: 'Nuxt Starter',
        link: [
            { rel: "icon", type: "image/png", href: "/favicon.ico" }
        ],
        script: [
            { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' },
            { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js' },
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js' },
        ]
    },
    js: [
        {src:"@assets/js/jquery.js"},
        {src:"@assets/js/appear.js"},
        {src:"@assets/js/owl.js"},
        {src:"@assets/js/wow.js"},
        {src:"@assets/js/main.js"},
        {src:"@assets/js/bootstrap.min.js"},
    ],
    nitro: {
        preset: 'node-server',
        experimental: {openAPI: true, payloadExtraction: true},
        prerender: {
            crawlLinks: true,
            routes:['/mailSender'],
            ignore: ['/dynamic']
        },
    },
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
    },
    build: {
        vendor: [
            'bootstrap',
            'jquery',
            "@assets/js/jquery.js",
            "@assets/js/popper.min.js",
            "@assets/js/bootstrap.min.js",
            "@assets/js/appear.js",
            "@assets/js/owl.js",
            "@assets/js/wow.js",
            "@assets/js/main.js"
        ],
    },
    // vendor: ['bootstrap', 'jquery', ],
    // css: ['assets/styles/main.scss'],
    modules: [
        '@bootstrap-vue-next/nuxt',
        '@pinia/nuxt',
        '@nuxtjs/strapi',
        'nuxt-chatgpt',
        'nuxt-quasar-ui',
        'nuxt-swiper',
        'vue3-carousel-nuxt'
    ],

    swiper: {
        prefix: 'Swiper',
        styleLang: 'css',
    },

    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
    },
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
        prefix: '/api',
        version: 'v4',
    },
    chatgpt: {
        apiKey: 'Your apiKey here goes here'
    },
    quasar: {
        plugins: [
            'BottomSheet',
            'Dialog',
            'Loading',
            'LoadingBar',
            'Notify',
            'Dark',
        ],
        extras: {
            font: 'roboto-font',
            fontIcons: ['material-icons'],
        },
    },
    // bootstrapVue: {
    //     bootstrapCSSsss: true, // Or `css: false`
    //     bootstrapVueCSS: true // Or `bvCSS: false`
    // }
    serverMiddleware: [
        // '~/server/middleware/scrap',
      ],
})
