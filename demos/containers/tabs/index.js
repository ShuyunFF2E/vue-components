import './index.scss';
import template from './index.html';

export default {
	name: 'tabs',
	template,
	data() {
		return {
			activeName: 'second',
			activeName2: 'first'
		};
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event);
		}
	}
};
