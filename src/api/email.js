// src/api/email.js
import axios from 'axios';

export const sendEmail = (emailData) => {
  return axios.post('http://localhost:8080/api/email/send', null, { params: emailData });
};