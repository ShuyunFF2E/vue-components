import MessageBox from './components/alert';
import './components/dialog';
import './components/dropdown';
import './components/input';
import Loading from './components/loading';
import Toast from './components/toast';

const components = [
	MessageBox
];

// 当执行 Vue.use(MyPlugin) 时
// calls `MyPlugin.install(Vue)`
const install = Vue => {
	if (install.installed) {
		return;
	}

	components.forEach(component => {
		Vue.component(component.name, component);
	});

	Vue.use(Loading.directive);

	Vue.prototype.$alert = MessageBox.alert;
	Vue.prototype.$confirm = MessageBox.confirm;
	Vue.prototype.$prompt = MessageBox.prompt;

	Vue.prototype.$toast = Toast;
};


if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	version: '1.0.1',
	elementUIVersion: '1.3.1',
	install,

	MessageBox,
	Loading
};
