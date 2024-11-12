import React, { useState } from 'react';
import { handleEmailSend } from '../services/EmailService';
import './EmailForm.css';

const EmailForm = () => {
    const [toEmail, setToEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailData = {
            toEmail,
            subject,
            body,
        };

    try {
            await handleEmailSend(emailData);
            setStatusMessage('Email sent successfully!');
        } catch (error) {
            console.error('There was an error sending the email!', error);
            setStatusMessage('Failed to send email.');
        }
    };

return (
        <div className="email-form-container">
            <h2>Send an Email</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>To Email:</label>
                    <input
                        type="email"
                        value={toEmail}
                        onChange={(e) => setToEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Subject:</label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Body:</label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send Email</button>
            </form>

            {statusMessage && <p>{statusMessage}</p>}
        </div>
    );
};

export default EmailForm;