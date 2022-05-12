// 项目入口文件index.js
// 导入'./add/add'文件，并解构出addfn
import { addFn,obj } from './add/add';
// const { addFn } = require('./add/add);
import dayjs from 'dayjs'
console.log(addFn(10, 20));
console.log('obj', obj);
console.log(dayjs().format('hh:mm:ss'));