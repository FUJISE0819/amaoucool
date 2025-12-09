import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer id="contact" className="site-footer">
            <div className="footer-content">
                <div className="footer-logo">
                    🍓 あまおう農園
                </div>
                <p>採れたての美味しさをお届けします。</p>
                <div className="contact-info">
                    <p>Email: order@amaoufarm.example.com</p>
                    <p>Tel: 090-XXXX-XXXX</p>
                </div>
                <p className="copyright">&copy; {new Date().getFullYear()} Amaou Farm. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
