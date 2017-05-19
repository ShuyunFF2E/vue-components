import './index.scss';
import template from './index.html';

import dialogOpts1 from './instance1';
import dialogOptsGen from './instance2';

export default {
	name: 'dialog',
	template,
	data() {
		return {
			dialogVisible: false,

			gridData: [{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}],
			dialogTableVisible: false,
			dialogFormVisible: false,
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			formLabelWidth: '120px'
		};
	},
	methods: {
		handleClose(done) {
			this.$confirm('确认关闭？')
				.then(() => {
					done();
				})
				.catch(() => { });
		},

		createDialog1() {
			const instance = this.$dialog(dialogOpts1).open();

			setTimeout(() => {
				instance.close();
			}, 5000);
		},

		createDialog2() {
			const dialogOpts2 = dialogOptsGen({ dialogTableVisible: true }, {
				handleClose() {
					this.dialogTableVisible = false;
				}
			});
			const instance = this.$dialog(dialogOpts2).open();

			setTimeout(() => {
				instance.close();
			}, 5000);
		}
	}
};
