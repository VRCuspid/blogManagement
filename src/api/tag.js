import fetch from '@/utils/fetch'


export function addTag (data) {
    return fetch({
        url:'/api/tag/add_tag',
        method:'POST',
        data
    })
}

export function getTagList (data) {
    return fetch({
        url:'/api/tag/get_tagList',
        method:'GET',
        data
    })
}

export function updateTag (data) {
    return fetch({
        url:'/api/tag/update_tag',
        method:'POST',
        data
    })
}

export function deleteTag (data) {
    return fetch({
        url:'/api/tag/del_tag',
        method:'DELETE',
        data
    })
}

export function getTagDetail (params) {
    return fetch({
        url:'/api/tag/get_tagDetail',
        method:'GET',
        params
    })
}
export default {
    addTag,
    getTagList,
    updateTag,
    deleteTag,
    getTagDetail,
}