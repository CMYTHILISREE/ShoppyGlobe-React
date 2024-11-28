import "../style/NotFound.css"
function NotFound() {
    return (
      <div className="not-found">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Page Not Found</p>
        <a href="/" className="not-found-link">Go back to Home</a>
      </div>
    );
  }
  
  export default NotFound;