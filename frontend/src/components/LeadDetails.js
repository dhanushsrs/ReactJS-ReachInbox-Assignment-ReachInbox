// // components/LeadDetails.js
// import React from 'react';

// const LeadDetails = () => {
//     return (
//         <div className="lead-details">
//             <h3>Lead Details</h3>
//             <p><strong>Name:</strong> Orlando</p>
//             <p><strong>Contact No:</strong> +54-9062827869</p>
//             <p><strong>Email ID:</strong> orlando@gmail.com</p>
//             <p><strong>Company:</strong> Reachinbox</p>
            
//             <h4>Activities</h4>
//             <p>Step 1: Email - Sent 3rd, Feb</p>
//             <p>Step 2: Email - Opened 5th, Feb</p>
//             <p>Step 3: Email - Opened 5th, Feb</p>
//         </div>
//     );
// };

// export default LeadDetails;


import React from 'react';
import './styles/LeadDetails.css';

const LeadDetails = ({ lead }) => {
  if (!lead) return <div className="lead-details">Select an email to view lead details</div>;

  return (
    <div className="lead-details">
      <h3>Lead Details</h3>
      <p><strong>Name:</strong> {lead.name}</p>
      <p><strong>Email:</strong> {lead.email}</p>
      <p><strong>Contact:</strong> {lead.contact}</p>
      <p><strong>Company:</strong> {lead.company}</p>
    </div>
  );
};

export default LeadDetails;
