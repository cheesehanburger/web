// 每个模块中可以使用多次按需导出
export let s1 = 'aaa'
export let s2 = 'bbb'
export function say() {}

// 按需导出和默认导出可以同时使用
export default {
    a: 20
}