// src/pages/ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', fontFamily: 'sans-serif' }}>
      <h1>Oops! Something went wrong.</h1>
      <p>We couldn't find the page you were looking for.</p>
      <Link to="/" style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
        Go back to the homepage
      </Link>
    </div>
  );
}

export default ErrorPage;