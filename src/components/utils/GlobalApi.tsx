const axios = require('axios');
//получаем токен
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_BACKEND_API_TOKEN;
//выполняем регистрацию через токен Bearer
const axiosClient = axios.create({
    baseURL:`${process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL}/api`,
    headers: {
        'Authorization': `Bearer ${API_TOKEN}`
    }
});

//API - запросы
const getArticles = () => axiosClient.get('/articles?populate=*');
//API - запрос на получение статьи
const getBenefists = () => axiosClient.get('/preimushhestvas?populate=*');
//API - запрос на получение конкретной статьи
const getSingleArticle = (id) => axiosClient.get('/articles/' + id + '?populate=*');

export default {
    getBenefists,
    getArticles,
    getSingleArticle,
}