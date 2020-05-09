import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function getUpToken() {
  return Cookies.get('setUpToken')
}

export function setUpToken(token) {
  return Cookies.set('setUpToken', token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function removeUpToken() {
  return Cookies.remove(TokenKey)
}
