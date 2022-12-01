const joi = require('joi')

// 用户名的验证规则
const username = joi.string().alphanum().min(1).max(10).required()
// 密码的验证规则
const password = joi.string().pattern(/^[\S]{6,12}$/).required()
// id的验证规则
const id = joi.number().integer().min(1).required()
// nickname验证规则
const nickname = joi.string().required()
// email验证规则
const email = joi.string().email().required()
// 头像信息验证规则对象
const avatar = joi.string().dataUri().required()

// 注册表单的验证规则对象
exports.reg_login_schema = {
    body: {
        username,
        password,
    },
}
// 更新表单的验证规则对象
exports.update_userinfo_schema = {
    body: {
        id,
        nickname,
        email,
    },
}

// 重置密码的规则对象
exports.update_password_schema = {
    body: {
        // 旧密码需要复合密码的格式
        oldPwd: password,
        // 1. joi.ref('oldPwd') 表示 newPwd 的值必须和 oldPwd 的值保持一致
        // 2. joi.not(joi.ref('oldPwd')) 表示 newPwd 的值不能等于 oldPwd 的值
        // 3. .concat() 用于合并 joi.not(joi.ref('oldPwd')) 和 password 这两条验证规则
        // 也就是说 新密码即不能和以前一样，且需要复合密码的格式
        newPwd: joi.not(joi.ref('oldPwd')).concat(password),
    }
}

// 更新头像的规则对象
exports.update_avatar_schema = {
    body: {
        avatar,
    },
}