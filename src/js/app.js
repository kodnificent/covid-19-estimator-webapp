require('smoothscroll-for-websites');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.Vue = require('vue');

const component_files = require.context('./', true, /\.vue$/i);
component_files.keys().map((file)=>{
    Vue.component(file.split('/').pop().split('.')[0], component_files(file).default);
});

const vm = new Vue({
    el: '#app',
    
    mounted()
    {
        //
    }
});