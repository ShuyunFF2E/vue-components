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
		/* eslint no-underscore-dangle: "off"	*/
		open() {
			if (instance._isMounted) {
				console.error('This dialog instance is opened!');
				return this;
			}
			instance.$mount();
			document.body.appendChild(instance.$el);
			return this;
		},
		close() {
			if (instance._isDestroyed || instance._isBeingDestroyed) {
				console.error('This dialog instance is closed!');
				return this;
			}
			instance.$destroy();
			document.body.removeChild(instance.$el);
			return this;
		}
	};
};


export default Dialog;

export { DialogService };
