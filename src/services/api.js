import axios from 'axios';

//https://api.hgbrasil.com/weather?key=dee0d30b&lat=-23.682&lon=-46.875

export const key = 'dee0d30b';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;