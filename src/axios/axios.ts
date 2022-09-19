import axios from "axios";

const inctance = axios.create({
    baseURL: "https://random-data-api.com/api"
})

export default inctance