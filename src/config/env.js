const env = process.env.APP_ENV;
const redirect = window.encodeURIComponent(location.href);

let config = {
    url: 'https://boss-api-dev.ai-ways.com/',//boss地址
    // url: '/',//ip地址请求
    loginUrl: `https://upm-dev.ai-ways.com/#/login?clientId=newfuel&_redirect=${redirect}`,// upm登录页
    baseURL: '',//功能
    timeout: 30000,
    withCredentials: false,
    pageTitle: 'vue管理系统后台模版',
};

if(env) {
    if(env === "prod") {
        config.url = 'https://boss-api-prod.ai-ways.com/';
        config.loginUrl = `https://upm.ai-ways.com/#/login?clientId=newfuel&_redirect=${redirect}`;
    } else {
        config.url = `https://boss-api-${env}.ai-ways.com/`;
        config.loginUrl = `https://upm-${env}.ai-ways.com/#/login?clientId=newfuel&_redirect=${redirect}`;
    }
}


config.baseURL = config.url + 'wecloud/ainewfuel/';
module.exports = config;

