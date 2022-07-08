import _Vue from "vue";
import {Sanitizer} from "./sanitize";

declare module '@nuxt/types' {
    interface Context {
        $sanitize: Sanitizer;
    }
    interface NuxtAppOptions {
        $sanitize: Sanitizer;
    }
}
declare module 'vue/types/vue' {
    interface Vue {
        $sanitize: Sanitizer;
    }
}
declare module 'vue/types/options' {
    interface ComponentOptions<V extends _Vue> {
        sanitize?: Sanitizer;
    }
}
