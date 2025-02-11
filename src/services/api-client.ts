import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f5e3d92649e74a52a3583b70ed1b1c97'
    }
})