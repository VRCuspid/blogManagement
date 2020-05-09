export const getQueryObj = (str) => {
    if (!str) {
        return {}
    }
    str = str.indexOf('?') == -1 ? str : str.slice(1)
    const strArr = str.split('&')
    let obj = {}
    strArr.forEach(item=>{
        const itemArr = item.split('=')
        obj[itemArr[0]] = itemArr[1]
    })
    return obj
}