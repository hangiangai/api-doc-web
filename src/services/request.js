import { axiosPost, axiosGet, axiosGeneral } from './../libs/http'
import { formatRequestData } from './../libs/docs'

function getBaseDocs(option) {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: option.url,
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        })
    })
}

function getDocUpdated(data) {
    return new Promise((resolve, reject) => {
        axiosPost({
            url: "",
            data: { data },
            success(data) {
                resolve(data)
            },
            error(err) {
                reject(err)
            }
        })
    })
}

function fetchTestResult(option) {
    return new Promise((resolve, reject) => {
        axiosGeneral({
            url: option.url,
            method: option.method,
            params: formatRequestData(option.params),
            success(result) {
                resolve(result)
            },
            error(err) {
                reject(err)
            }
        })
    })
}

export {
    getBaseDocs,
    getDocUpdated,
    fetchTestResult
}