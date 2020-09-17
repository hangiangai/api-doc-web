import axios from 'axios'

function axiosPost(options) {
    axios({
        url: options.url,
        method: 'post',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        params: options.data
    })
        .then((res) => {
            options.success(res.data)
        })
        .catch((err) => {
            options.error(err)
        });
}


function axiosPut(options) {
    axios({
        url: options.url,
        method: 'put',
        headers: {
            "Content-Type": "multipart/form-data",
        },
        params: options.params,
    })
        .then((res) => {
            options.success(res.data)
        }).catch((err) => {
            options.error(err)
        })
}

function axiosDelete(options) {
    axios({
        url: options.url,
        method: 'delete',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        params: options.params,
    })
        .then((res) => {
            options.success(res.data)
        }).catch((err) => {
            options.error(err)
        })
}

function axiosGet(options) {
    axios({
        url: options.url,
        method: 'get',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        params: options.params
    })
        .then((res) => {
            options.success(res.data)
        })
        .catch((err) => {
            options.error(err)
        });
}

function axiosGeneral(option) {
    switch (option.method) {
        case "POST":
            axiosPost(option);
            break;
        case "GET":
            axiosGet(option);
            break;
        case "PUT":
            axiosPut(option);
            break;
        case "DELETE":
            axiosDelete(option);
            break;
        default:
            alert(`未知方法名称: ${option.method}`);
            break;
    }
}

export {
    axiosPost,
    axiosGet,
    axiosPut,
    axiosDelete,
    axiosGeneral
}