
// Manage user authentication
import { generateSecretCode, sendSMS } from 'mockSMSAPI';

let currentSecretCode = null;

export function requestSecretCode(phoneNumber) {
    currentSecretCode = generateSecretCode();
    sendSMS(phoneNumber, currentSecretCode);
}

export function verifySecretCode(code) {
    return currentSecretCode === code;
}
