import template from './index.html';

export default {
	template,
	data() {
		return {
			dialogVisible: true
		};
	},
	methods: {
		handleClose() {
			this.dialogVisible = false;
		}
	}
};
