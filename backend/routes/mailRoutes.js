// backend/routes/mailRoutes.js
const express = require('express');
const { listMails, getMailThread, deleteMailThread, resetInbox, replyToMail } = require('../controllers/mailController');
const router = express.Router();

router.get('/list', listMails);
router.get('/messages/:thread_id', getMailThread);
router.delete('/messages/:thread_id', deleteMailThread);
router.get('/reset', resetInbox);
router.post('/reply/:thread_id', replyToMail);

module.exports = router;
