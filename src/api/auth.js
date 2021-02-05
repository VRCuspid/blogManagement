import fetch from '@/utils/fetch'

// 获取验证码
export function getCode () {
    return fetch({
        url:'/api/auth/code',
        method:'GET',
    })
}

// 登录接口
export function login (data) {
    return fetch({
        url:'/api/auth/login',
        method:'POST',
        data
    })
}

export default {
    getCode,
    login
}