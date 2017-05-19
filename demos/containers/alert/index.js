import './index.scss';
import template from './index.html';

export default {
	name: 'alert',
	template,
	data() {
		return {};
	},
	methods: {
		open() {
			this.$alert('这是一段内容', '标题名称', {
				confirmButtonText: '确定',
				callback: action => {
					this.$message({
						type: 'info',
						message: `action: ${action}`
					});
				}
			});
		},
		open2() {
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$message({
					type: 'success',
					message: '删除成功!'
				});
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				});
			});
		}
	}
};
