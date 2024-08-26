// // // // frontend/src/App.js
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Login from './components/Login';
// // import MailList from './components/MailList';

// // function App() {
// //     return (
// //         <Router>
// //             <Routes>
// //                 <Route path="/" element={<Login />} />
// //                 <Route path="/mails" element={<MailList />} />
// //             </Routes>
// //         </Router>
// //     );
// // }

// // export default App;

// // frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import MailList from './components/MailList';
import Sidebar from './components/Sidebar';
import EmailList from './components/EmailList';
import EmailDetail from './components/EmailDetail';
import LeadDetails from './components/LeadDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/mails" element={<MailList />} />
            </Routes>
      </Router>
    );
}

export default App;

