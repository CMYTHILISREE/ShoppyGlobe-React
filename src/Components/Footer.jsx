import "../style/Footer.css"
function Footer(){
    return(
        <div className="footer">
            <div className="footer-logo">
               <h2>ShoppyGlobe</h2>
               <p>Your one-stop shop for everything!</p>
            </div>
        <div className="footer-social">
            <p>Follow us:</p>
            <a href="https://www.facebook.com" className="social-link" target="_blank" >Facebook</a>
            <a href="https://www.twitter.com" className="social-link" target="_blank" >Twitter</a>
            <a href="https://www.instagram.com" className="social-link" target="_blank" >Instagram</a>
        </div>

    <div className="footer-bottom">
    <p>© 2024 ShoppyGlobe. All rights reserved.</p>
    </div>

    </div>
    );

}
export default Footer;