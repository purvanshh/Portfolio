import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section contact-details">
                        <h2>Contact</h2>
                        <div className="contact-info">
                            <p><strong>Email :</strong> purvanshhsahu@gmail.com</p>
                            <p><strong>Phone :</strong> +91 9171303506</p>
                            <p><strong>Address :</strong> Bangalore, Karnataka</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2024 purvanshh. All rights reserved.
                </div>
            </footer>
        );
    }
}

export default Footer;
