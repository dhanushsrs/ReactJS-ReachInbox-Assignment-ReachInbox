// // frontend/src/components/MailList.js
// import React, { useState, useEffect } from 'react';
// import { fetchMails } from '../api';

// const MailList = () => {
//     const [mails, setMails] = useState([]);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchMails(token).then((response) => setMails(response.data.data)).catch(console.error);
//         }
//     }, []);

//     return (
//         <div>
//             <h1>Mails</h1>
//             <ul>
//                 {mails.map((mail) => (
//                     <li key={mail.id}>
//                         {mail.subject} from {mail.fromEmail}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default MailList;
// working
// import React, { useState, useEffect } from 'react';
// import { fetchMails } from '../api';

// const MailList = () => {
//     const [mails, setMails] = useState([]);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchMails(token).then((response) => setMails(response.data.data)).catch(console.error);
//         }
//     }, []);

//     return (
//         <div style={styles.mailListContainer}>
//             <h1 style={styles.heading}>Mails</h1>
//             <ul style={styles.ulStyle}>
//                 {mails.map((mail) => (
//                     <li key={mail.id} style={styles.mailCard}>
//                         <h4>{mail.fromEmail}</h4>
//                         <p>{mail.subject}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// const styles = {
//     mailListContainer: {
//         position: 'fixed',
//         left: 0,
//         width: '400px', // Adjust this as per your requirements, it might be too narrow for text
//         height: '100%', // Full height
//         overflowY: 'auto', // Scrollable if the content exceeds height
//         backgroundColor: '#f5f5f5',
//         padding: '10px',
//         boxShadow: '2px 0px 5px rgba(0,0,0,0.1)'
//     },
//     heading: {
//         fontSize: '16px',
//         marginBottom: '10px',
//         textAlign: 'center',
//     },
//     ulStyle: {
//         listStyle: 'none',
//         padding: 0,
//     },
//     mailCard: {
//         backgroundColor: '#fff',
//         padding: '10px',
//         marginBottom: '10px',
//         borderRadius: '4px',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     }
// };

// export default MailList;




// import React, { useState, useEffect } from 'react';
// import { fetchMails, fetchMailThread } from '../api';

// const MailList = () => {
//     const [mails, setMails] = useState([]);
//     const [selectedMail, setSelectedMail] = useState(null);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchMails(token).then((response) => setMails(response.data.data)).catch(console.error);
//         }
//     }, []);

//     const handleMailClick = (mailId) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchMailThread(token, mailId).then((response) => {
//                 setSelectedMail(response.data.data[0]); // Assuming the API returns the first email of the thread
//             }).catch(console.error);
//         }
//     };

//     return (
//         <div style={styles.container}>
//             {/* Left Side: Mail List */}
//             <div style={styles.mailListContainer}>
//                 <h1 style={styles.heading}>All Inbox</h1>
//                 <p>Total Mails: {mails.length}</p>
//                 <ul style={styles.ulStyle}>
//                     {mails.map((mail) => (
//                         <li
//                             key={mail.id}
//                             style={styles.mailCard}
//                             onClick={() => handleMailClick(mail.threadId)}
//                         >
//                             <h4>{mail.fromEmail}</h4>
//                             <p>{mail.subject}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Right Side: Selected Mail Details */}
//             <div style={styles.mailDetailsContainer}>
//                 {selectedMail ? (
//                     <div style={styles.mailDetailCard}>
//                         <h3>{selectedMail.subject}</h3>
//                         <p><strong>From:</strong> {selectedMail.fromEmail}</p>
//                         <p><strong>To:</strong> {selectedMail.toEmail}</p>
//                         <p><strong>Sent At:</strong> {new Date(selectedMail.sentAt).toLocaleString()}</p>
//                         <div dangerouslySetInnerHTML={{ __html: selectedMail.body }} />
//                     </div>
//                 ) : (
//                     <p>Select a mail to view the details</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// // Styles for the component
// const styles = {
//     container: {
//         display: 'flex',
//         width: '100%',
//     },
//     mailListContainer: {
//         position: 'fixed',
//         left: 0,
//         width: '250px', // Increased the width for better readability
//         height: '100%',
//         overflowY: 'auto',
//         backgroundColor: '#f5f5f5',
//         padding: '10px',
//         boxShadow: '2px 0px 5px rgba(0,0,0,0.1)',
//     },
//     heading: {
//         fontSize: '20px',
//         marginBottom: '5px',
//         textAlign: 'left',
//     },
//     ulStyle: {
//         listStyle: 'none',
//         padding: 0,
//     },
//     mailCard: {
//         backgroundColor: '#fff',
//         padding: '10px',
//         marginBottom: '10px',
//         borderRadius: '4px',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//         cursor: 'pointer',
//     },
//     mailDetailsContainer: {
//         marginLeft: '270px', // Adjusted to prevent overlap with the left mail list
//         width: '500px', // Centered mail detail card
//         padding: '20px',
//     },
//     mailDetailCard: {
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '4px',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     },
// };

// export default MailList;


// import React, { useState, useEffect } from 'react';
// import { fetchMails, fetchMailThread } from '../api';

// const MailList = () => {
//     const [mails, setMails] = useState([]);
//     const [selectedThread, setSelectedThread] = useState([]);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchMails(token)
//                 .then((response) => setMails(response.data.data))
//                 .catch(console.error);
//         }
//     }, []);

//     const handleMailClick = (mailId) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchMailThread(token, mailId)
//                 .then((response) => {
//                     setSelectedThread(response.data.data); // Set the entire thread
//                 })
//                 .catch(console.error);
//         }
//     };

//     return (
//         <div style={styles.container}>
//             {/* Left Side: Mail List */}
//             <div style={styles.mailListContainer}>
//                 <h1 style={styles.heading}>All Inbox</h1>
//                 <p>Total Mails: {mails.length}</p>
//                 <ul style={styles.ulStyle}>
//                     {mails.map((mail) => (
//                         <li
//                             key={mail.id}
//                             style={styles.mailCard}
//                             onClick={() => handleMailClick(mail.threadId)}
//                         >
//                             <h4>{mail.fromEmail}</h4>
//                             <p>{mail.subject}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Right Side: Selected Mail Thread Details */}
//             <div style={styles.mailDetailsContainer}>
//                 {selectedThread.length > 0 ? (
//                     selectedThread.map((mail) => (
//                         <div key={mail.id} style={styles.mailDetailCard}>
//                             <h3>{mail.subject}</h3>
//                             <p><strong>From:</strong> {mail.fromEmail}</p>
//                             <p><strong>To:</strong> {mail.toEmail}</p>
//                             <p><strong>Sent At:</strong> {new Date(mail.sentAt).toLocaleString()}</p>
//                             <div dangerouslySetInnerHTML={{ __html: mail.body }} />
//                             <hr style={styles.divider} />
//                         </div>
//                     ))
//                 ) : (
//                     <p>Select a mail to view the details</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// // Styles for the component
// const styles = {
//     container: {
//         display: 'flex',
//         width: '100%',
//     },
//     mailListContainer: {
//         position: 'fixed',
//         left: 0,
//         width: '250px', // Width for the mail list
//         height: '100%',
//         overflowY: 'auto',
//         backgroundColor: '#f5f5f5',
//         padding: '10px',
//         boxShadow: '2px 0px 5px rgba(0,0,0,0.1)',
//     },
//     heading: {
//         fontSize: '20px',
//         marginBottom: '5px',
//         textAlign: 'left',
//     },
//     ulStyle: {
//         listStyle: 'none',
//         padding: 0,
//     },
//     mailCard: {
//         backgroundColor: '#fff',
//         padding: '10px',
//         marginBottom: '10px',
//         borderRadius: '4px',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//         cursor: 'pointer',
//     },
//     mailDetailsContainer: {
//         marginLeft: '270px',
//         width: '700px', // Width for the email detail section
//         padding: '20px',
//     },
//     mailDetailCard: {
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '4px',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//         marginBottom: '20px',
//     },
//     divider: {
//         margin: '20px 0',
//         borderTop: '1px solid #ddd',
//     },
// };

// export default MailList;


// import React, { useState, useEffect } from 'react';
// import { fetchMails, fetchMailThread, replyToMail } from '../api'; // Assuming `replyToMail` is implemented in your api file

// const MailList = () => {
//     const [mails, setMails] = useState([]);
//     const [selectedThread, setSelectedThread] = useState([]);
//     const [showReplyBox, setShowReplyBox] = useState(false);
//     const [replyContent, setReplyContent] = useState('');
//     const [leadDetails, setLeadDetails] = useState({
//         name: 'John Doe',
//         contact: '+9556562652562566',
//         email: 'user@gmail.com',
//         linkedin: 'linkedin.com/Akhil',
//         company: 'Reachinbox',
//         campaign: 'Marketing Campaign',
//     });

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchMails(token)
//                 .then((response) => setMails(response.data.data))
//                 .catch(console.error);
//         }
//     }, []);

//     const handleMailClick = (mailId) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchMailThread(token, mailId)
//                 .then((response) => {
//                     setSelectedThread(response.data.data); // Set the entire thread
//                 })
//                 .catch(console.error);
//         }
//     };

//     const handleReplyClick = () => {
//         setShowReplyBox(true);
//     };

//     const handleSendReply = () => {
//         const token = localStorage.getItem('token');
//         if (token && selectedThread.length > 0) {
//             const threadId = selectedThread[0].threadId; // Assuming threadId is part of the selected thread
//             replyToMail(token, threadId, replyContent)
//                 .then(() => {
//                     alert('Reply sent successfully');
//                     setReplyContent(''); // Clear the reply content
//                     setShowReplyBox(false); // Close the reply box
//                 })
//                 .catch(console.error);
//         }
//     };

//     return (
//         <div style={styles.container}>
//             {/* Left Side: Mail List */}
//             <div style={styles.mailListContainer}>
//                 <h1 style={styles.heading}>All Inbox</h1>
//                 <p>Total Mails: {mails.length}</p>
//                 <ul style={styles.ulStyle}>
//                     {mails.map((mail) => (
//                         <li
//                             key={mail.id}
//                             style={styles.mailCard}
//                             onClick={() => handleMailClick(mail.threadId)}
//                         >
//                             <h4>{mail.fromEmail}</h4>
//                             <p>{mail.subject}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Middle Side: Selected Mail Thread Details */}
//             <div style={styles.mailDetailsContainer}>
//                 {selectedThread.length > 0 ? (
//                     <>
//                         {selectedThread.map((mail) => (
//                             <div key={mail.id} style={styles.mailDetailCard}>
//                                 <h3>{mail.subject}</h3>
//                                 <p><strong>From:</strong> {mail.fromEmail}</p>
//                                 <p><strong>To:</strong> {mail.toEmail}</p>
//                                 <p><strong>Sent At:</strong> {new Date(mail.sentAt).toLocaleString()}</p>
//                                 <div dangerouslySetInnerHTML={{ __html: mail.body }} />
//                                 <hr style={styles.divider} />
//                             </div>
//                         ))}
//                         {/* Reply Button */}
//                         <button style={styles.replyButton} onClick={handleReplyClick}>Reply</button>

//                         {/* Reply Box (similar to Gmail) */}
//                         {showReplyBox && (
//                             <div style={styles.replyBox}>
//                                 <textarea
//                                     style={styles.textArea}
//                                     value={replyContent}
//                                     onChange={(e) => setReplyContent(e.target.value)}
//                                     placeholder="Type your reply..."
//                                 />
//                                 <button style={styles.sendButton} onClick={handleSendReply}>
//                                     Send
//                                 </button>
//                             </div>
//                         )}
//                     </>
//                 ) : (
//                     <p>Select a mail to view the details</p>
//                 )}
//             </div>

//             {/* Right Side: Lead Details and Activities */}
//             <div style={styles.rightSideContainer}>
//                 {/* Lead Details */}
//                 <div style={styles.leadDetailsCard}>
//                     <h2>Lead Details</h2>
//                     <div style={styles.detailsRow}>
//                         <span>Name</span> <span>{leadDetails.name}</span>
//                     </div>
//                     <div style={styles.detailsRow}>
//                         <span>Contact No</span> <span>{leadDetails.contact}</span>
//                     </div>
//                     <div style={styles.detailsRow}>
//                         <span>Email Id</span> <span>{leadDetails.email}</span>
//                     </div>
//                     <div style={styles.detailsRow}>
//                         <span>LinkedIn</span> <span>{leadDetails.linkedin}</span>
//                     </div>
//                     <div style={styles.detailsRow}>
//                         <span>Company Name</span> <span>{leadDetails.company}</span>
//                     </div>
//                 </div>

//                 {/* Activities */}
//                 <div style={styles.activitiesCard}>
//                     <h2>{leadDetails.campaign}</h2>
//                     {selectedThread.map((mail, index) => (
//                         <div key={mail.id} style={styles.detailsRow}>
//                             <span>Step: {index + 1} Email</span>
//                             <br></br>
//                             <span>Send Date: {new Date(mail.sentAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// // Styles for the component
// const styles = {
//     container: {
//         display: 'flex',
//         width: '100%',
//     },
//     mailListContainer: {
//         position: 'fixed',
//         left: 0,
//         width: '250px',
//         height: '100%',
//         overflowY: 'auto',
//         backgroundColor: '#f5f5f5',
//         padding: '10px',
//         boxShadow: '2px 0px 5px rgba(0,0,0,0.1)',
//     },
//     heading: {
//         fontSize: '20px',
//         marginBottom: '5px',
//         textAlign: 'left',
//     },
//     ulStyle: {
//         listStyle: 'none',
//         padding: 0,
//     },
//     mailCard: {
//         backgroundColor: '#fff',
//         padding: '10px',
//         marginBottom: '10px',
//         borderRadius: '4px',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//         cursor: 'pointer',
//     },
//     mailDetailsContainer: {
//         marginLeft: '270px',
//         width: '800px',
//         padding: '20px',
//     },
//     mailDetailCard: {
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '4px',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//         marginBottom: '20px',
//     },
//     replyButton: {
//         backgroundColor: '#007bff',
//         color: '#fff',
//         padding: '10px',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
//     replyBox: {
//         marginTop: '20px',
//     },
//     textArea: {
//         width: '100%',
//         height: '100px',
//         padding: '10px',
//         marginBottom: '10px',
//         borderRadius: '4px',
//         border: '1px solid #ccc',
//     },
//     sendButton: {
//         backgroundColor: '#28a745',
//         color: '#fff',
//         padding: '10px',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
//     divider: {
//         margin: '20px 0',
//         borderTop: '1px solid #ddd',
//     },
//     rightSideContainer: {
//         marginLeft: '300px', // Adjust to fit your layout
//         padding: '20px',
//         width: '350px',
//     },
//     leadDetailsCard: {
//         backgroundColor: '#fff',
//         padding: '20px',
//         marginBottom: '20px',
//         borderRadius: '4px',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     },
//     activitiesCard: {
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '4px',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     },
//     detailsRow: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         padding: '5px 0',
//     },
// };

// export default MailList;

// import React, { useState, useEffect } from 'react';
// import { fetchMails, fetchMailThread, deleteMailThread, resetInbox, replyToMail } from '../api'; // Assume `deleteMailThread` and `resetInbox` are implemented in your API file

// const MailList = () => {
//     const [mails, setMails] = useState([]);
//     const [selectedThread, setSelectedThread] = useState([]);
//     const [showReplyBox, setShowReplyBox] = useState(false);
//     const [replyContent, setReplyContent] = useState('');
//     const [showDeletePopup, setShowDeletePopup] = useState(false);
//     const [threadToDelete, setThreadToDelete] = useState(null); // Stores the selected thread to delete

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchMails(token)
//                 .then((response) => setMails(response.data.data))
//                 .catch(console.error);
//         }
//     }, []);

//     const handleMailClick = (mailId) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchMailThread(token, mailId)
//                 .then((response) => {
//                     setSelectedThread(response.data.data); // Set the entire thread
//                 })
//                 .catch(console.error);
//         }
//     };

//     const handleReplyClick = () => {
//         setShowReplyBox(true);
//     };

//     const handleSendReply = () => {
//         const token = localStorage.getItem('token');
//         if (token && selectedThread.length > 0) {
//             const threadId = selectedThread[0].threadId; // Assuming threadId is part of the selected thread
//             replyToMail(token, threadId, replyContent)
//                 .then(() => {
//                     alert('Reply sent successfully');
//                     setReplyContent(''); // Clear the reply content
//                     setShowReplyBox(false); // Close the reply box
//                 })
//                 .catch(console.error);
//         }
//     };

//     const handleDeleteClick = (threadId) => {
//         setThreadToDelete(threadId);
//         setShowDeletePopup(true);
//     };

//     const handleDeleteConfirm = () => {
//         const token = localStorage.getItem('token');
//         if (token && threadToDelete) {
//             deleteMailThread(token, threadToDelete)
//                 .then(() => {
//                     alert('Email deleted successfully');
//                     setShowDeletePopup(false);
//                     setThreadToDelete(null);
//                     // Refresh the mails after deletion
//                     fetchMails(token).then((response) => setMails(response.data.data));
//                 })
//                 .catch(console.error);
//         }
//     };

//     const handleLogout = () => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             resetInbox(token)
//                 .then(() => {
//                     alert('Logged out successfully');
//                     localStorage.removeItem('token'); // Remove token from localStorage
//                     window.location.href = '/'; // Redirect to login page
//                 })
//                 .catch(console.error);
//         }
//     };

//     return (
//         <div style={styles.container}>
//             {/* Logout Button */}
//             <button style={styles.logoutButton} onClick={handleLogout}>
//                 Logout
//             </button>

//             {/* Left Side: Mail List */}
//             <div style={styles.mailListContainer}>
//                 <h1 style={styles.heading}>All Inbox</h1>
//                 <p>Total Mails: {mails.length}</p>
//                 <ul style={styles.ulStyle}>
//                     {mails.map((mail) => (
//                         <li key={mail.id} style={styles.mailCard}>
//                             <div style={styles.mailCardContent} onClick={() => handleMailClick(mail.threadId)}>
//                                 <h4>{mail.fromEmail}</h4>
//                                 <p>{mail.subject}</p>
//                             </div>
//                             <button style={styles.deleteIcon} onClick={() => handleDeleteClick(mail.threadId)}>
//                                 🗑️
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Middle Side: Selected Mail Thread Details */}
//             <div style={styles.mailDetailsContainer}>
//                 {selectedThread.length > 0 ? (
//                     <>
//                         {selectedThread.map((mail) => (
//                             <div key={mail.id} style={styles.mailDetailCard}>
//                                 <h3>{mail.subject}</h3>
//                                 <p><strong>From:</strong> {mail.fromEmail}</p>
//                                 <p><strong>To:</strong> {mail.toEmail}</p>
//                                 <p><strong>Sent At:</strong> {new Date(mail.sentAt).toLocaleString()}</p>
//                                 <div dangerouslySetInnerHTML={{ __html: mail.body }} />
//                                 <hr style={styles.divider} />
//                             </div>
//                         ))}
//                         {/* Reply Button */}
//                         <button style={styles.replyButton} onClick={handleReplyClick}>Reply</button>

//                         {/* Reply Box (similar to Gmail) */}
//                         {showReplyBox && (
//                             <div style={styles.replyBox}>
//                                 <textarea
//                                     style={styles.textArea}
//                                     value={replyContent}
//                                     onChange={(e) => setReplyContent(e.target.value)}
//                                     placeholder="Type your reply..."
//                                 />
//                                 <button style={styles.sendButton} onClick={handleSendReply}>
//                                     Send
//                                 </button>
//                             </div>
//                         )}
//                     </>
//                 ) : (
//                     <p>Select a mail to view the details</p>
//                 )}
//             </div>

//             {/* Delete Confirmation Popup */}
//             {showDeletePopup && (
//                 <div style={styles.popupContainer}>
//                     <div style={styles.popup}>
//                         <h2>Are you sure?</h2>
//                         <p>Your selected email will be deleted.</p>
//                         <div style={styles.popupButtons}>
//                             <button style={styles.cancelButton} onClick={() => setShowDeletePopup(false)}>Cancel</button>
//                             <button style={styles.deleteButton} onClick={handleDeleteConfirm}>Delete</button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// // Styles for the component
// const styles = {
//     container: {
//         display: 'flex',
//         width: '100%',
//     },
//     mailListContainer: {
//         position: 'fixed',
//         left: 0,
//         width: '250px',
//         height: '100%',
//         overflowY: 'auto',
//         backgroundColor: '#f5f5f5',
//         padding: '10px',
//         boxShadow: '2px 0px 5px rgba(0,0,0,0.1)',
//     },
//     heading: {
//         fontSize: '20px',
//         marginBottom: '5px',
//         textAlign: 'left',
//     },
//     ulStyle: {
//         listStyle: 'none',
//         padding: 0,
//     },
//     mailCard: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         backgroundColor: '#fff',
//         padding: '10px',
//         marginBottom: '10px',
//         borderRadius: '4px',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//         cursor: 'pointer',
//     },
//     mailCardContent: {
//         flexGrow: 1,
//     },
//     deleteIcon: {
//         backgroundColor: 'transparent',
//         border: 'none',
//         cursor: 'pointer',
//         fontSize: '18px',
//     },
//     mailDetailsContainer: {
//         marginLeft: '270px',
//         width: '500px',
//         padding: '20px',
//     },
//     mailDetailCard: {
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '4px',
//         boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//         marginBottom: '20px',
//     },
//     replyButton: {
//         backgroundColor: '#007bff',
//         color: '#fff',
//         padding: '10px',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
//     replyBox: {
//         marginTop: '20px',
//     },
//     textArea: {
//         width: '100%',
//         height: '100px',
//         padding: '10px',
//         marginBottom: '10px',
//         borderRadius: '4px',
//         border: '1px solid #ccc',
//     },
//     sendButton: {
//         backgroundColor: '#28a745',
//         color: '#fff',
//         padding: '10px',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
//     divider: {
//         margin: '20px 0',
//         borderTop: '1px solid #ddd',
//     },
//     popupContainer: {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     popup: {
//         backgroundColor: '#fff',
//         padding: '20px',
//         borderRadius: '5px',
//         boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//         textAlign: 'center',
//     },
//     popupButtons: {
//         display: 'flex',
//         justifyContent: 'space-around',
//         marginTop: '20px',
//     },
//     cancelButton: {
//         backgroundColor: '#6c757d',
//         color: '#fff',
//         padding: '10px',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
//     deleteButton: {
//         backgroundColor: '#dc3545',
//         color: '#fff',
//         padding: '10px',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
//     logoutButton: {
//         position: 'fixed',
//         top: '10px',
//         right: '20px',
//         backgroundColor: '#f00',
//         color: '#fff',
//         padding: '10px',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
// };

// export default MailList;

import React, { useState, useEffect } from 'react';
import { fetchMails, fetchMailThread, deleteMailThread, resetInbox, replyToMail } from '../api'; // Assume `deleteMailThread` and `resetInbox` are implemented in your API file

const MailList = () => {
    const [mails, setMails] = useState([]);
    const [selectedThread, setSelectedThread] = useState([]);
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [replyContent, setReplyContent] = useState('');
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [threadToDelete, setThreadToDelete] = useState(null); // Stores the selected thread to delete

    // Placeholder lead details
    const [leadDetails, setLeadDetails] = useState({
        name: 'John Doe',
        contact: '+9556562652562566',
        email: 'user@gmail.com',
        linkedin: 'linkedin.com/Akhil',
        company: 'Reachinbox',
        campaign: 'Campaign',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchMails(token)
                .then((response) => setMails(response.data.data))
                .catch(console.error);
        }
    }, []);

    const handleMailClick = (mailId) => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchMailThread(token, mailId)
                .then((response) => {
                    setSelectedThread(response.data.data); // Set the entire thread
                })
                .catch(console.error);
        }
    };

    const handleReplyClick = () => {
        setShowReplyBox(true);
    };

    const handleSendReply = () => {
        const token = localStorage.getItem('token');
        if (token && selectedThread.length > 0) {
            const threadId = selectedThread[0].threadId; // Assuming threadId is part of the selected thread
            replyToMail(token, threadId, replyContent)
                .then(() => {
                    alert('Reply sent successfully');
                    setReplyContent(''); // Clear the reply content
                    setShowReplyBox(false); // Close the reply box
                })
                .catch(console.error);
        }
    };

    const handleDeleteClick = (threadId) => {
        setThreadToDelete(threadId);
        setShowDeletePopup(true);
    };

    const handleDeleteConfirm = () => {
        const token = localStorage.getItem('token');
        if (token && threadToDelete) {
            deleteMailThread(token, threadToDelete)
                .then(() => {
                    alert('Email deleted successfully');
                    setShowDeletePopup(false);
                    setThreadToDelete(null);
                    // Refresh the mails after deletion
                    fetchMails(token).then((response) => setMails(response.data.data));
                })
                .catch(console.error);
        }
    };

    const handleLogout = () => {
        const token = localStorage.getItem('token');
        if (token) {
            resetInbox(token)
                .then(() => {
                    alert('Logged out successfully');
                    localStorage.removeItem('token'); // Remove token from localStorage
                    window.location.href = '/login'; // Redirect to login page
                })
                .catch(console.error);
        }
    };

    return (
        <div style={styles.container}>
            {/* Logout Button */}
            <button style={styles.logoutButton} onClick={handleLogout}>
                Logout
            </button>

            {/* Left Side: Mail List */}
            <div style={styles.mailListContainer}>
                <h1 style={styles.heading}>All Inbox</h1>
                <p>Total Mails: {mails.length}</p>
                <ul style={styles.ulStyle}>
                    {mails.map((mail) => (
                        <li key={mail.id} style={styles.mailCard}>
                            <div style={styles.mailCardContent} onClick={() => handleMailClick(mail.threadId)}>
                                <h4>{mail.fromEmail}</h4>
                                <p>{mail.subject}</p>
                            </div>
                            <button style={styles.deleteIcon} onClick={() => handleDeleteClick(mail.threadId)}>
                                🗑️
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Middle Side: Selected Mail Thread Details */}
            <div style={styles.mailDetailsContainer}>
                {selectedThread.length > 0 ? (
                    <>
                        {selectedThread.map((mail) => (
                            <div key={mail.id} style={styles.mailDetailCard}>
                                <h3>{mail.subject}</h3>
                                <p><strong>From:</strong> {mail.fromEmail}</p>
                                <p><strong>To:</strong> {mail.toEmail}</p>
                                <p><strong>Sent At:</strong> {new Date(mail.sentAt).toLocaleString()}</p>
                                <div dangerouslySetInnerHTML={{ __html: mail.body }} />
                                <hr style={styles.divider} />
                            </div>
                        ))}
                        {/* Reply Button */}
                        <button style={styles.replyButton} onClick={handleReplyClick}>Reply</button>

                        {/* Reply Box (similar to Gmail) */}
                        {showReplyBox && (
                            <div style={styles.replyBox}>
                                <textarea
                                    style={styles.textArea}
                                    value={replyContent}
                                    onChange={(e) => setReplyContent(e.target.value)}
                                    placeholder="Type your reply..."
                                />
                                <button style={styles.sendButton} onClick={handleSendReply}>
                                    Send
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <p>Select a mail to view the details</p>
                )}
            </div>

            {/* Right Side: Lead Details and Activities */}
            <div style={styles.rightSideContainer}>
                {/* Lead Details */}
                <div style={styles.leadDetailsCard}>
                    <h2>Lead Details</h2>
                    <div style={styles.detailsRow}>
                        <span>Name</span> <span>{leadDetails.name}</span>
                    </div>
                    <div style={styles.detailsRow}>
                        <span>Contact No</span> <span>{leadDetails.contact}</span>
                    </div>
                    <div style={styles.detailsRow}>
                        <span>Email Id</span> <span>{leadDetails.email}</span>
                    </div>
                    <div style={styles.detailsRow}>
                        <span>LinkedIn</span> <span>{leadDetails.linkedin}</span>
                    </div>
                    <div style={styles.detailsRow}>
                        <span>Company Name</span> <span>{leadDetails.company}</span>
                    </div>
                </div>

                {/* Activities */}
                <div style={styles.activitiesCard}>
                    <h2>{leadDetails.campaign}</h2>
                    {selectedThread.map((mail, index) => (
                        <div key={mail.id} style={styles.detailsRow}>
                            <span>Step: {index + 1} Email</span>
                            <span>Send Date: {new Date(mail.sentAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Delete Confirmation Popup */}
            {showDeletePopup && (
                <div style={styles.popupContainer}>
                    <div style={styles.popup}>
                        <h2>Are you sure?</h2>
                        <p>Your selected email will be deleted.</p>
                        <div style={styles.popupButtons}>
                            <button style={styles.cancelButton} onClick={() => setShowDeletePopup(false)}>Cancel</button>
                            <button style={styles.deleteButton} onClick={handleDeleteConfirm}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Styles for the component
const styles = {
    container: {
        display: 'flex',
        width: '100%',
    },
    mailListContainer: {
        position: 'fixed',
        left: 0,
        width: '350px',
        height: '100%',
        overflowY: 'auto',
        backgroundColor: '#f5f5f5',
        padding: '10px',
        boxShadow: '2px 0px 5px rgba(0,0,0,0.1)',
    },
    heading: {
        fontSize: '20px',
        marginBottom: '5px',
        textAlign: 'left',
    },
    ulStyle: {
        listStyle: 'none',
        padding: 0,
    },
    mailCard: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
    },
    mailCardContent: {
        flexGrow: 1,
    },
    deleteIcon: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '18px',
    },
    mailDetailsContainer: {
        marginLeft: '380px',
        width: '0px',
        padding: '20px',
    },
    mailDetailCard: {
        backgroundColor: '#fff',
        padding: '20px',
        width: '750px',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
    },
    replyButton: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    replyBox: {
        marginTop: '20px',
    },
    textArea: {
        width: '100%',
        height: '100px',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    sendButton: {
        backgroundColor: '#28a745',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    divider: {
        margin: '20px 0',
        borderTop: '1px solid #ddd',
    },
    rightSideContainer: {
        marginLeft: '800px', // Adjust to fit your layout
        padding: '20px',
        width: '350px',
    },
    leadDetailsCard: {
        backgroundColor: '#fff',
        padding: '20px',
        marginBottom: '20px',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    activitiesCard: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    detailsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '5px 0',
    },
    popupContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    popupButtons: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px',
    },
    cancelButton: {
        backgroundColor: '#6c757d',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    logoutButton: {
        position: 'fixed',
        top: '10px',
        right: '20px',
        backgroundColor: '#f00',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default MailList;


