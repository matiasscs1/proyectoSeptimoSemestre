import axios from 'axios';

const API = 'http://localhost:3000';

export const registerRequest  = user => axios.post(`${API}/doctors`, user);

export const loginRequest = user => axios.post(`${API}/login`, user);