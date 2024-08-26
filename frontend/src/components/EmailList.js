// EmailList.js
import React from 'react';

const EmailList = (mails) => {
    return (
        <div className="email-list">
            <h3>New Replies</h3>
            <ul>
                <li className="email-item">
                    <span className="email-name">Beata@gmail.com</span>
                    <span className="email-date">Mar 7</span>
                    <span className="email-status">Interested</span>
                </li>
                <li className="email-item">
                    <span className="email-name">Sanya@gmail.com</span>
                    <span className="email-date">Mar 7</span>
                    <span className="email-status">Closed</span>
                </li>
                {/* Add more email items */}
            </ul>
        </div>
    );
};

export default EmailList;
