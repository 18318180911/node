// 项目入口文件index.js
// 导入'./add/add'文件，并解构出addfn
import { addFn,obj } from './add/add';
// const { addFn } = require('./add/add);
import dayjs from 'dayjs';
import style from './css/index.css';
import less from './less/index.less';
import logoSrc from './assets/s_01(1).jpg';
document.body.style.backgroundImage = `url(${logoSrc})`
console.log(addFn(10, 20));
console.log('obj', obj);
console.log(dayjs().format('hh:mm:ss'));
console.log(style);
console.log(less);