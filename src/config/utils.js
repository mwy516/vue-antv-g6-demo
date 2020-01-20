/*
    截取url参数
 */
export function parseUrl(url) {
    let a = document.createElement('a');
    a.href = url;
    return {
        host: a.hostname,
        port: a.port,
        query: a.search,
        hash: a.hash.replace('#', ''),
        params: (() => {
            let searchArr = a.search.replace(/^\?/, '').split('&');
            let params = {};
            searchArr.forEach(item => {
                let [key, value] = item.split('=');
                params[key] = value;
            });
            return params;
        })()
    }
}

