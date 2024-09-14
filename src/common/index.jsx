
const host = 'http://localhost:9000'
// const host = 'https://assignment-backend-m5j5.onrender.com'


const SummeryApi = {


    add: {
        url: `${host}/add`,
        method: "post"
    },
    show: {
        url: `${host}/show`,
        method: "get"
    },

    delete: {
        url: `${host}/delete`,
        method: "delete"
    },

    update: {
        url: `${host}/update`,
        method: "post"
    }

}


export default SummeryApi