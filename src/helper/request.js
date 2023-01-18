import getAccessToken from "../helper/getAccesstoken";

function joinURL(baseURL, url) {
    return `${baseURL}/${url}`
}

// const domain = "https://172.17.1.132/api"
// const domain = "https://192.168.56.101/api"
const domain = "https://sbuservices.parstechnology.ir/api"
class Services {

    //---REQUEST FUNCTION
    request(url, method = "POST", data = null) {
        const Authorization = getAccessToken();
        const headers = {
            "Accept": "application/json",
            "Content-type": "application/json",
            Authorization: Authorization
        }
        url = joinURL(domain, url);
        console.log(url);
        const options = {
            headers,
            method,
        }
        if (data) {
            options.body = JSON.stringify({ ...data })
        }
        return fetch(url, options)
    }
    //---POST 
    post(url, data) {
        const method = "POST";
        return this.request(url, method, data).then(res => res.json())
    }
    //---GET
    get(url, id) {
        debugger
        const method = "Get";
        if (id) {
            url = `${url}/${id}`
        }
        return this.request(url, method).then(res => res.json())

    }
    delete(url) {
        const method = "DELETE";
        return this.request(url, method).then(res => res.json())
    }

    put() {

    }

    getAll() {


    }

}

export default Services;