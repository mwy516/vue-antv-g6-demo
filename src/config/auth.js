import Cookies from 'js-cookie'

const env = process.env.APP_ENV || 'dev';
export const tokenKey = `upm_${env}_token`;
export const account = `upm_${env}_account`;
export const clientId = 'newfuel';

export function getToken() {
    return Cookies.get(tokenKey)
}

export function setToken(token, key) {
    return Cookies.set(key || tokenKey, token)
}
