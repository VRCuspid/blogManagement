import fetch from '@/utils/fetch'

// 新增文章
export function addArticle (data) {
    return fetch({
        url:'/api/acticle/add_acticle',
        method:'POST',
        data
    })
}

// 修改文章
export function updateActicle (data) {
    return fetch({
        url:'/api/acticle/update_acticle',
        method:'POST',
        data
    })
}

// 文章列表
export function getActicleList (params) {
    return fetch({
        url:'/api/acticle/get_acticleList',
        method:'GET',
        params
    })
}

// 文章详情
export function getActicleDetail (params) {
    return fetch({
        url:'/api/acticle/get_acticleDetail',
        method:'GET',
        params
    })
}