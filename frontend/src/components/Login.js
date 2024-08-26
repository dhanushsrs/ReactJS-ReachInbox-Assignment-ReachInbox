// // frontend/src/components/Login.js
// import React from 'react';
// // import { useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     // const history = useHistory();
//     let navigate = useNavigate();

//     const handleLogin = () => {
//         window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000';
//     };

//     React.useEffect(() => {
//         const params = new URLSearchParams(window.location.search);
//         const token = params.get('token');
//         if (token) {
//             localStorage.setItem('token', token);
//             navigate('/mails');
//         }
//     }, [navigate]);

//     return (
//         <div>
//             <h1>Login</h1>
//             <button onClick={handleLogin}>Login with Google</button>
//         </div>
//     );
// };

// export default Login;


import React from 'react';
import { useNavigate } from 'react-router-dom';

// Add some inline styles for better visual representation
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#000', // Dark background like in the provided image
    },
    navbar: {
        width: '100%',
        padding: '10px 0',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#1a1a1a', // Dark background for card
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        color: '#fff',
    },
    button: {
        backgroundColor: '#4285F4',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '15px',
        width: '100%',
        fontSize: '16px',
    },
    createAccountButton: {
        backgroundColor: '#4A90E2',
        marginTop: '15px',
    },
    link: {
        color: '#fff',
        textDecoration: 'underline',
        cursor: 'pointer',
        marginTop: '15px',
    },
};

const Login = () => {
    let navigate = useNavigate();

    // Function to handle Google login
    const handleLogin = () => {
        window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000';
    };

    // Handle token if present in the URL after login redirect
    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        if (token) {
            localStorage.setItem('token', token);
            navigate('/mails');
        }
    }, [navigate]);

    return (
        <div style={styles.container}>
            {/* Navbar */}
            <div style={styles.navbar}>
                REACHINBOX
            </div>

            {/* Main Card */}
            <div style={styles.card}>
                <h2>Create a new account</h2>

                {/* Google Sign In Button */}
                <button onClick={handleLogin} style={styles.button}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                        alt="Google Icon"
                        style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }}
                    />
                    Sign Up with Google
                </button>

                {/* Create an Account Button */}
                <button style={{ ...styles.button, ...styles.createAccountButton }}>
                    Create an Account
                </button>

                {/* Already have an account? Sign In */}
                <p style={styles.link} onClick={() => navigate('/')}>
                    Already have an account? Sign In
                </p>
            </div>
        </div>
    );
};

export default Login;
