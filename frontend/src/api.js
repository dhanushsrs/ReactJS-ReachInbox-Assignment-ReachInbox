// frontend/src/api.js
import axios from 'axios';

const API_URL = 'https://hiring.reachinbox.xyz/api/v1/onebox'; 

// const HARDCODED_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoid29yc3R0aGlua2VyMmsyM0BnbWFpbC5jb20iLCJpZCI6MTE2NSwiZmlyc3ROYW1lIjoiQWtoaWwiLCJsYXN0TmFtZSI6IkR1Z2dpcmFsYSJ9LCJpYXQiOjE3MjQ1NTkyNjcsImV4cCI6MTc1NjA5NTI2N30.rJsMWqr-ncBb1Ac6LphA2stawjJxUBmGJo4QYlLH3Ok';


// export const fetchMails = (token) => {
//     return axios.get(`${API_URL}/list`, {
//         headers: {
//             Authorization: `Bearer ${HARDCODED_TOKEN}`
//         }
//     });
// };

export const fetchMailThread = (token, mailId) => {
    return axios.get(`${API_URL}/messages/${mailId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
};


export const fetchMails = (token) => axios.get(`${API_URL}/list`, { headers: { Authorization: `Bearer ${token}` } });
// export const fetchMailThread = (thread_id, token) => axios.get(`${API_URL}/messages/${thread_id}`, { headers: { Authorization: `Bearer ${token}` } });
export const deleteMailThread = (token, thread_id) => axios.delete(`${API_URL}/messages/${thread_id}`, { headers: { Authorization: `Bearer ${token}` } });
export const resetInbox = (token) => axios.get(`${API_URL}/reset`, { headers: { Authorization: `Bearer ${token}` } });
export const replyToMail = (thread_id, token, data) => axios.post(`${API_URL}/reply/${thread_id}`, data, { headers: { Authorization: `Bearer ${token}` } });
