import React, { useState } from 'react';
import axios from 'axios';
import './styles/ComposeEmail.css';

const ComposeEmail = ({ onClose }) => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSend = () => {
    const email = { to, subject, body };
    axios.post('/api/mails/send', email)
      .then(() => {
        alert('Email sent successfully!');
        onClose();
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="compose-email">
      <h2>Compose Email</h2>
      <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
      <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
      <button onClick={handleSend}>Send</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default ComposeEmail;
