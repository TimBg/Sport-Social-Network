import axios, { AxiosInstance } from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: { 'API-KEY' : 'bfa9243d-a699-44a2-b543-fb2fba5d5a83'},
    baseURL: 'http://newsapi.org/v2/'
});

export const getSportNewsAPI = () => {
    return instance.get(`top-headlines?country=us&category=sports&apiKey=6d394d5507bf469b96ea66b2693fed8f`)
        .then(response => response.data);
}