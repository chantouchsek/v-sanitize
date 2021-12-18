import Vue from 'vue';
import VSanitize from 'v-sanitize';

const pluginOptions = <%= serialize(options) %>
Vue.use(VSanitize, {...pluginOptions});

export default ({app}, inject) => {
  inject('sanitize', VSanitize);
}
