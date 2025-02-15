import CryptoJS from 'crypto-js';

// Encrypt text with password
export function encrypt(data: string, password: string): string {
  return CryptoJS.AES.encrypt(data, password).toString();
}

// Decrypt text with password
export function decrypt(ciphertext: string, password: string): string {
  const bytes = CryptoJS.AES.decrypt(ciphertext, password);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);

  if (!decrypted) throw new Error('Decryption failed. Invalid password?');
  return decrypted;
}
