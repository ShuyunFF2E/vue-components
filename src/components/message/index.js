import './index.scss';

import Message from 'element-ui/packages/message';
/* eslint new-cap: "off" */

// 重写 Message.success 方法
Message.success = (message, opts = {}) => {
	Message({
		duration: 3000,
		iconClass: 'el-icon-circle-check',
		...opts,
		message,
		type: 'success',
		customClass: ['success-toast', opts.customClass].join(' ')
	});
};

// 重写 Message.error 方法
Message.success = (message, opts = {}) => {
	Message({
		duration: 0,
		showClose: true,
		iconClass: 'el-icon-circle-check',
		...opts,
		message,
		type: 'error',
		customClass: ['error-toast', opts.customClass].join(' ')
	});
};


export default Message;
