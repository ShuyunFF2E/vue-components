import './index.scss';
import template from './index.html';

export default {
	name: 'tips',
	template,
	data() {
		return {
		};
	},
	methods: {
		open() {
			this.$message({
				message: '这是一条消息提示'
			});
		},

		open2() {
			this.$message({
				message: '恭喜你，这是一条成功消息',
				type: 'success',
				duration: 3000,
				iconClass: 'el-icon-circle-check',
				customClass: 'success-toast'
			});
		},

		open3() {
			this.$message({
				message: '警告哦，这是一条警告消息',
				type: 'warning'
			});
		},

		open4() {
			this.$message.error({
				message: '错了哦，这是一条错误消息',
				duration: 0,
				showClose: true,
				iconClass: 'el-icon-warning',
				customClass: 'error-toast'
			});
		}
	}
};
