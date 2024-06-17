// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@nuxt/ui', '@nuxtjs/supabase', '@pinia/nuxt', '@nuxtjs/google-fonts'],
    css: ['~/assets/css/main.css'],
    supabase: {
        redirectOptions: {
            login: '/login',
            callback: '/confirm',
            exclude: ['/*'],
        }
    },
    // https://fonts.google.com/
    googleFonts: {
        families: {
            // https://google-fonts.nuxtjs.org/getting-started/options#families
            'Roboto': true,
            Lato: [100, 300],
        }
    },
    // Head Elemente welche über die ganze Applikation gültig sind können hier konfiguriert werden.
    app: {
        head: {
            title: 'CDS Frontend',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    // Activate/Deactivate Server Side Rendering
    ssr: false,
})