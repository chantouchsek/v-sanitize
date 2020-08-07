import Vue from 'vue';
import VSanitize from 'v-sanitize';

export default ({ app }) => {
  const [pluginOptions] = [<%= serialize(options) %>]

  Vue.use(VSanitize, { ...pluginOptions });
  app.$sanitize = VSanitize;
}
