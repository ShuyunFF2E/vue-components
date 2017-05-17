import './index.scss';
import template from './index.html';

export default {
	name: 'app',
	template,
	data() {
		return {
			activeMenu: this.$router.currentRoute.name
		};
	}
};
