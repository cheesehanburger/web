// 将需要导入的模块用花括号包围，必须与按需导出的名称相同
// 可以使用as进行重命名
import info,{s1,s2 as str2} from './03.按需导出.js'
console.log(s1,str2,info)