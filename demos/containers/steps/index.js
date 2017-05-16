import './index.scss';
import template from './index.html';

export default {
	name: 'steps',
	template,
	data() {
		return {
			active: 0
		};
	},

	methods: {
		next() {
			if (this.active++ > 2) {
				this.active = 0;
			}
		}
	}
};
