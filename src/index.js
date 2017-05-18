import '../element-theme/base.css';
import '../element-theme/transfer.css';

// base components
import Button from './components/button';
import ButtonGroup from './components/button-group';
import Icon from './components/icon';
import Option from './components/option';
import Loading from './components/loading';
import Row from './components/row';
import Col from './components/col';
import Spinner from './components/spinner';

// form components
import Form from './components/form';
import FormItem from './components/form-item';
import Input from './components/input';
import InputNumber from './components/input-number';
import Radio from './components/radio';
import RadioButton from './components/radio-button';
import RadioGroup from './components/radio-group';
import Checkbox from './components/checkbox';
import CheckboxButton from './components/checkbox-button';
import CheckboxGroup from './components/checkbox-group';
import Select from './components/select';
import Switch from './components/switch';
import TimeSelect from './components/time-select';
import TimePicker from './components/time-picker';
import DatePicker from './components/date-picker';

// data components
import Table from './components/table';
import TableColumn from './components/table-column';
import Pagination from './components/pagination';

// tips components
import Alert from './components/alert';
import MessageBox from './components/message-box';
import Message from './components/message';

// navigation components
import Tabs from './components/tabs';
import TabPane from './components/tab-pane';
import Breadcrumb from './components/breadcrumb';
import BreadcrumbItem from './components/breadcrumb-item';

import Menu from './components/menu';
import SubMenu from './components/submenu';
import MenuItem from './components/menu-item';
import MenuItemGroup from './components/menu-item-group';
import Dropdown from './components/dropdown';
import DropdownMenu from './components/dropdown-menu';
import DropdownItem from './components/dropdown-item';
import Steps from './components/steps';
import Step from './components/step';


import Dialog from './components/dialog';
import Tooltip from './components/tooltip';
import Popover from './components/popover';
import Carousel from './components/carousel';
import CarouselItem from './components/carousel-item';

import CollapseTransition from './components/collapse-transition';

const components = [
	Button, ButtonGroup, Option, Row, Col, Icon, Spinner,

	Form, FormItem,
	Input, InputNumber, Radio, RadioButton, RadioGroup, Checkbox, CheckboxButton, CheckboxGroup, Select, Switch,
	TimeSelect, TimePicker, DatePicker,

	Table, TableColumn, Pagination,

	Alert, MessageBox, Message,

	Tabs, TabPane, Breadcrumb, BreadcrumbItem, Dropdown, DropdownMenu, DropdownItem, Steps, Step,

	Menu, SubMenu, MenuItem, MenuItemGroup,

	Dialog, Tooltip, Popover, Carousel, CarouselItem,

	CollapseTransition
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

	Vue.prototype.$loading = Loading.service;

	Vue.prototype.$alert = MessageBox.alert;
	Vue.prototype.$confirm = MessageBox.confirm;
	Vue.prototype.$prompt = MessageBox.prompt;

	Vue.prototype.$tips = Message;
	Vue.prototype.$toast = Message;
	Vue.prototype.$message = Message;
};


if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	version: '1.0.1',
	elementUIVersion: '1.3.1',
	install,

	Button, ButtonGroup, Option, Row, Col, Icon, Spinner,
	Loading,

	Form, FormItem,
	Input, InputNumber, Radio, RadioButton, RadioGroup, Checkbox, CheckboxButton, CheckboxGroup, Select, Switch,
	TimeSelect, TimePicker, DatePicker,

	Table, TableColumn, Pagination,

	Menu, SubMenu, MenuItem, MenuItemGroup,

	Alert, MessageBox, Message,

	Tabs, TabPane, Breadcrumb, BreadcrumbItem, Dropdown, DropdownMenu, DropdownItem, Steps, Step,

	Dialog, Tooltip, Popover, Carousel, CarouselItem,

	CollapseTransition
};
