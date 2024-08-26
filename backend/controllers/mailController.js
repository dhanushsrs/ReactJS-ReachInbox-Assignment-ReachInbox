// backend/controllers/mailController.js
const axios = require('axios');

// Base URL for API requests
const API_URL = 'https://hiring.reachinbox.xyz/api/v1/';

async function listMails(req, res) {
    console.log('Listing');
    try {
        console.log(req.headers.authorization);
        const response = await axios.get(`${API_URL}/onebox/list`, {
            headers: { Authorization: `Bearer ${req.headers.authorization}` },
        });
        console.log(response);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getMailThread(req, res) {
    try {
        const threadId = req.params.thread_id;
        const response = await axios.get(`${API_URL}/onebox/messages/${threadId}`, {
            headers: { Authorization: `Bearer ${req.headers.authorization}` },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteMailThread(req, res) {
    try {
        const threadId = req.params.thread_id;
        const response = await axios.delete(`${API_URL}/onebox/messages/${threadId}`, {
            headers: { Authorization: `Bearer ${req.headers.authorization}` },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function resetInbox(req, res) {
    try {
        const response = await axios.get(`${API_URL}/onebox/reset`, {
            headers: { Authorization: `Bearer ${req.headers.authorization}` },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function replyToMail(req, res) {
    try {
        const threadId = req.params.thread_id;
        const response = await axios.post(`${API_URL}/onebox/reply/${threadId}`, req.body, {
            headers: { Authorization: `Bearer ${req.headers.authorization}` },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { listMails, getMailThread, deleteMailThread, resetInbox, replyToMail };
