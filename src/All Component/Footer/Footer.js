import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, message } = this.state;
        if (email && message) {
            alert('Message sent successfully!');
            this.setState({ email: '', message: '' });
        } else {
            alert('Please fill out all fields.');
        }
    }

    render() {
        return (
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section about">
                        <h2>About Us</h2>
                        <p>At my core, I am committed to providing the best services in the industry. My goal is to meet and exceed your expectations through continuous improvement and customer interaction. Join me on this journey of growth and collaboration, where your feedback fuels my progress. Together, let's elevate your experience and make every interaction count.</p>
                    </div>
                    <div className="footer-section links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section contact-form">
                        <h2>Contact Us</h2>
                        <form onSubmit={this.handleSubmit}>
                            <input type="email" name="email" placeholder="Your email" value={this.state.email} onChange={this.handleInputChange} required />
                            <textarea name="message" placeholder="Your message" value={this.state.message} onChange={this.handleInputChange} required />
                            <button type="submit">Send</button>
                        </form>
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
