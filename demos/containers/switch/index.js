import './index.scss';
import template from './index.html';

export default {
	name: 'radio',
	template,
	data() {
		return {
			value1: true,
			value2: true,

			value4: false,
			value5: true
		};
	}
};
