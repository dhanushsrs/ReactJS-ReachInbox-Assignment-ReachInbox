import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/Inbox.css';

const Inbox = ({ onSelectEmail }) => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get('/api/mails/list')
      .then(res => setEmails(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="inbox">
      <h3>Inbox</h3>
      <ul className="email-list">
        {emails.map(email => (
          <li key={email.id} onClick={() => onSelectEmail(email)}>
            <div className="email-sender">{email.sender}</div>
            <div className="email-subject">{email.subject}</div>
            <div className="email-date">{new Date(email.date).toLocaleDateString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inbox;
