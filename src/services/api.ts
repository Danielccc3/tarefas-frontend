import axios from 'axios'
 
const api = axios.create({
    baseURL: 'https://tarefas-back-dcorrea.herokuapp.com'
})
 
export default api;
