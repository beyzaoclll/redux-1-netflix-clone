import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    //tüm isteklere eklenecek header
    headers: {
        accept: 'application/json',
        // yetkilendirme
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
      },
      //ortak parametre
      params:{
        language: 'tr-TR',
      }
});
