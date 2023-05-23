import axios, { AxiosInstance } from 'axios';
import { getAccessToken } from 'context/auth/store';

const baseURL = 'http://192.168.155.235/api/';

export const api: AxiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getAccessToken()}`,
    },
});
