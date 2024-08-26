// // components/Sidebar.js
// import React from 'react';

// const Sidebar = () => {
//     return (
//         <div className="sidebar">
//             <h2>All Inbox(s)</h2>
//             <input type="text" placeholder="Search" />
//             {/* Mock inboxes */}
//             <ul className="inbox-list">
//                 <li className="inbox-item active">Venkat</li>
//                 <li className="inbox-item">Beata@gmail.com</li>
//                 <li className="inbox-item">Sanya@gmail.com</li>
//                 {/* More inbox items */}
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;


import React from 'react';
import './styles/Sidebar.css';

const Sidebar = ({ activeFolder, onSelectFolder }) => {
  const folders = ['Inbox', 'Sent', 'Drafts', 'Spam', 'Trash'];

  return (
    <div className="sidebar">
      <h2>Mail</h2>
      <ul className="folder-list">
        {folders.map(folder => (
          <li
            key={folder}
            className={activeFolder === folder ? 'active' : ''}
            onClick={() => onSelectFolder(folder)}
          >
            {folder}
          </li>
        ))}
      </ul>
      <button className="compose-button" onClick={() => onSelectFolder('Compose')}>
        Compose
      </button>
    </div>
  );
};

export default Sidebar;
