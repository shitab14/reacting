// src/services/emailService.js
import { sendEmail } from '../api/email';

export const handleEmailSend = async (emailData) => {
  try {
    const response = await sendEmail(emailData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to send email');
  }
};