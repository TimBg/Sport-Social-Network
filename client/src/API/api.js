import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    headers: { 'API-KEY' : '6d394d5507bf469b96ea66b2693fed8f'},
    baseURL: 'http://newsapi.org/'
});

export const getSportNews = () => {
    return (instance
        .get('v2/top-headlines/?country=us&category=sports&apiKey=6d394d5507bf469b96ea66b2693fed8f')
        .then(response => response.data));    
}