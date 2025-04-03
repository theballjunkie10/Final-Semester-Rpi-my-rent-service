import React from 'react'
function ErrorPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">Go Back Home</a>
    </div>
  );
}

export default ErrorPage;