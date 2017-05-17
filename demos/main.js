/*
 * @Author: Picker
 * @Date: 2017-05-10 16:17:33
 * @Last Modified by: Picker
 * @Last Modified time: 2017-05-17 10:23:50
 */

import Vue from 'vue';
import App from '@/containers/app';
import router from './router';

import '../element-theme/index.css';
import '../src/index.js';

import ElementUI from 'element-ui';

Vue.use(ElementUI);

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
	el: 'main',
	router,
	template: '<App/>',
	components: { App }
});
