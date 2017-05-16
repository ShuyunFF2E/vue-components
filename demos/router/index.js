import Vue from 'vue';
import Router from 'vue-router';

import Button from '@/containers/button';
import Radio from '@/containers/radio';
import Checkbox from '@/containers/checkbox';
import Input from '@/containers/input';
import Select from '@/containers/select';
import Switch from '@/containers/switch';
import TimePicker from '@/containers/time-picker';
import DatePicker from '@/containers/date-picker';
import DateTimePicker from '@/containers/datetime-picker';


import Table from '@/containers/table';
import Pagination from '@/containers/pagination';

// notice
import Tips from '@/containers/tips';
import Loading from '@/containers/loading';
import Toast from '@/containers/toast';
import Alert from '@/containers/alert';

// navigator
import Tabs from '@/containers/tabs';
import Breadcrumb from '@/containers/breadcrumb';
import Dropdown from '@/containers/dropdown';
import Steps from '@/containers/steps';

Vue.use(Router);

export default new Router({
	routes: [
		{
			name: 'button',
			path: '/button',
			component: Button
		}, {
			name: 'radio',
			path: '/radio',
			component: Radio
		}, {
			name: 'checkbox',
			path: '/checkbox',
			component: Checkbox
		}, {
			name: 'input',
			path: '/input',
			component: Input
		}, {
			name: 'select',
			path: '/select',
			component: Select
		}, {
			name: 'switch',
			path: '/switch',
			component: Switch
		}, {
			name: 'timepicker',
			path: '/time-picker',
			component: TimePicker
		}, {
			name: 'datepicker',
			path: '/date-picker',
			component: DatePicker
		}, {
			name: 'datetimepicker',
			path: '/date-time-picker',
			component: DateTimePicker
		}, {
			name: 'table',
			path: '/table',
			component: Table
		}, {
			name: 'pagination',
			path: '/pagination',
			component: Pagination
		}, {
			name: 'tips',
			path: '/tips',
			component: Tips
		}, {
			name: 'loading',
			path: '/loading',
			component: Loading
		}, {
			name: 'toast',
			path: '/toast',
			component: Toast
		}, {
			name: 'alert',
			path: '/alert',
			component: Alert
		}, {
			name: 'tabs',
			path: '/tabs',
			component: Tabs
		}, {
			name: 'breadcrumb',
			path: '/breadcrumb',
			component: Breadcrumb
		}, {
			name: 'dropdown',
			path: '/dropdown',
			component: Dropdown
		}, {
			name: 'steps',
			path: '/steps',
			component: Steps
		}
	]
});
