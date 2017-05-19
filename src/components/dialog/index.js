import './index.scss';

import Vue from 'vue';

import Dialog from 'element-ui/packages/dialog';

// const DialogConstructor = Vue.extend(Dialog);

const DialogService = function (options = {}) {
	if (Vue.prototype.$isServer) {
		return false;
	}

	const DialogConstructor = Vue.extend(options);

	const instance = new DialogConstructor();

	return {
		open() {
			console.log(instance);
			instance.vm = instance.$mount();
			instance.dom = instance.vm.$el;
			document.body.appendChild(instance.vm.$el);
		},
		close() {
			instance.$destroy();
			document.body.removeChild(instance.vm.$el);
			instance.vm = null;
			instance.dom = null;
		}
	};
};


export default Dialog;

export { DialogService };
