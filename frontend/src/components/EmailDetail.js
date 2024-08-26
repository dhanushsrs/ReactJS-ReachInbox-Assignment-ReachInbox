// // EmailDetail.js
// import React from 'react';

// const EmailDetail = () => {
//     return (
//         <div className="email-detail">
//             <h2>New Product Launch</h2>
//             <div className="email-info">
//                 <p><strong>From:</strong> jeanne@icloud.com</p>
//                 <p><strong>To:</strong> lennon.j@mail.com</p>
//                 <p><strong>Date:</strong> 20 June 2022</p>
//             </div>
//             <p className="email-body">
//                 Hi {`{FIRST_NAME}`}, <br />
//                 I would like to introduce you to SaaSgrow, a productized design service specifically tailored for SaaS startups...
//             </p>
//             <button className="reply-button">Reply</button>
//         </div>
//     );
// };

// export default EmailDetail;

import React from 'react';
import './styles/EmailDetail.css';

const EmailDetail = ({ email }) => {
  if (!email) return <div className="email-detail">Select an email to view details</div>;

  return (
    <div className="email-detail">
      <h2>{email.subject}</h2>
      <div className="email-info">
        <p><strong>From:</strong> {email.sender}</p>
        <p><strong>To:</strong> {email.recipient}</p>
        <p><strong>Date:</strong> {new Date(email.date).toLocaleString()}</p>
      </div>
      <div className="email-body">{email.body}</div>
      <button className="reply-button">Reply</button>
    </div>
  );
};

export default EmailDetail;

