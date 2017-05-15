import './index.scss';
import template from './index.html';

export default {
	name: 'radio',
	template,
	data() {
		return {
			opts: {
				start: '08:30',
				step: '00:15',
				end: '18:30'
			},
			value1: ''
		};
	}
};
