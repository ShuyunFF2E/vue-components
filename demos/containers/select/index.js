import './index.scss';
import template from './index.html';

export default {
	name: 'select',
	template,
	data() {
		return {
			options: [{
				value: '选项1',
				label: '黄金糕'
			}, {
				value: '选项2',
				label: '双皮奶',
				disabled: true
			}, {
				value: '选项3',
				label: '蚵仔煎'
			}, {
				value: '选项4',
				label: '龙须面'
			}, {
				value: '选项5',
				label: '北京烤鸭'
			}],

			value: '',

			value5: []
		};
	}
};
