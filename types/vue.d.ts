/**
 * Extends interfaces in Vue.js
 */

import VSanitize from './';

declare module 'vue/types/vue' {
    interface Vue {
        $sanitize: VSanitize;
    }
}
