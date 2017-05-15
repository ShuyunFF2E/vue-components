import './index.scss';
import template from './index.html';

export default {
	name: 'pagination',
	template,
	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		}
	},
	data() {
		return {
			currentPage1: 5,
			currentPage2: 5,
			currentPage3: 5,
			currentPage4: 4
		};
	}
};
