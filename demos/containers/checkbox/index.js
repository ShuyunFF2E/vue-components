import './index.scss';
import template from './index.html';


const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
	name: 'checkbox',
	template,
	data() {
		return {
			checked: false,
			checked1: false,
			checked2: true,

			checkAll: true,
			checkedCities: ['上海', '北京'],
			cities: cityOptions,
			isIndeterminate: true,

			checkboxGroup1: ['上海']
		};
	},
	methods: {
		handleCheckAllChange(event) {
			this.checkedCities = event.target.checked ? cityOptions : [];
			this.isIndeterminate = false;
		},
		handleCheckedCitiesChange(value) {
			const checkedCount = value.length;
			this.checkAll = checkedCount === this.cities.length;
			this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
		}
	}
};
