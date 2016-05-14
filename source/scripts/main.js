//global.jQuery = require('jquery');
require('bootstrap-loader');
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../', true));

console.log('holala');
