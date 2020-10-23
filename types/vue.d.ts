/**
 * Extends interfaces in Vue.js
 */

import _Vue from 'vue'
import { VSanitize } from './';

declare module '@nuxt/types' {
    interface Context {
        $sanitize: VSanitize;
    }
    interface NuxtAppOptions {
        $sanitize: VSanitize;
    }
}
declare module 'vue/types/vue' {
    interface Vue {
        $sanitize: VSanitize;
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends _Vue> {
        sanitize?: VSanitize;
    }
}
