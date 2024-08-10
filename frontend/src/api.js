import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const signup = (data) => API.post('/users/signup', data);
export const login = (data) => API.post('/users/login', data);
export const createClassroom = (data, token) =>
    API.post('/classroom', data, { headers: { Authorization: token } });
export const getClassrooms = (token) =>
    API.get('/classroom', { headers: { Authorization: token } });